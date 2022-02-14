import {Component, Input, OnInit} from '@angular/core';
import * as FileSaver from 'file-saver';
import {FeatureService} from "../feature.service";
import {ActivatedRoute, Route} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {pipe} from "rxjs";
@Component({
  selector: 'app-electric-tracking',
  templateUrl: './electric-tracking.component.html',
  styleUrls: ['./electric-tracking.component.scss']
})
export class ElectricTrackingComponent implements OnInit {
  tableData: any[];
  lastYearTotal: number;

  thisYearTotal: number;

  cols: any[] = [];
  rangeDates: Date[];
  private _selectedColumns: any[] = [];
  selectedList = [];
  tagId: string;
  formSearch: any;
  size = 10;
  page = 0;
  totalItems = 0;
  totalPages = 10;
  loading = false;

  constructor(
    private featureService: FeatureService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.tagId = this.route.snapshot.paramMap.get('tag');
    this.initForm();
    this.onSearch();

  }
  pipe = new DatePipe('en-US');

  onSearch() {
    let paramValue = this.formSearch.value;
    paramValue.fromDate =  this.pipe.transform(this.rangeDates[0], 'yyyy-MM-dd HH:mm:ss');
    paramValue.toDate = this.pipe.transform(this.rangeDates[1],'yyyy-MM-dd HH:mm:ss');
    paramValue.page = this.page;
    paramValue.size = this.size;
    this.loading = true;
    this.featureService.getAnalysisTag(this.tagId, paramValue).subscribe(res => {
      this.cols = [];
      res.paramList.forEach(paramName => this.cols.push({ field: paramName, header: paramName}));
      this.tableData = res.data;
      if(this._selectedColumns.length === 0 ) {
        this._selectedColumns = this.cols;

      }
      this.totalItems = res.totalItems;

    }, _ => {}, () => this.loading = false);
  }

  initForm() {
    let fromDate = new Date();
    fromDate.setHours(0);
    fromDate.setMinutes(0);
    fromDate.setSeconds(0);
    fromDate.setMilliseconds(0);
    let toDate = new Date();
    toDate.setHours(23);
    toDate.setMinutes(59);
    toDate.setSeconds(59);
    toDate.setMilliseconds(999);
    this.formSearch = this.fb.group({
      fromDate: [fromDate],
      toDate: [toDate],
      page: [this.page],
      size: [this.size]
    });
    this.rangeDates = [fromDate, toDate];
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.tableData);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  changePage(event) {
    if(event != null) {
      this.page = event.page;
      this.size = event.rows;
    } else  {
      this.page = 0;
    }
    this.onSearch();
  }
}
