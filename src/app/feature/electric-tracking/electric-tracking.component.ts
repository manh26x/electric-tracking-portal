import {Component, Input, OnInit} from '@angular/core';
import * as FileSaver from 'file-saver';
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
  private _selectedColumns: any[];
  selectedList = [];
  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i <= 20; i ++) {
      this.cols.push({ field: 'Upv'+i, header: 'Upv'+i});
    }
    for(let i = 1; i <= 20; i ++) {
      this.cols.push({ field: 'Ipv'+i, header: 'Ipv'+i});
    }
    for(let i = 1; i <= 3; i ++) {
      this.cols.push({ field: 'Uac'+i, header: 'Uac'+i});
    }
    this._selectedColumns = this.cols;

    for(let i = 1; i <= 3; i ++) {
      this.cols.push({ field: 'Iac'+i, header: 'Iac'+i});
    }
        this.tableData = [
      {time: Date.parse('2022-02-16T12:12:12'), lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
      {time: Date.parse('2022-02-16T12:13:12'), lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
      {time: Date.parse('2022-02-16T12:14:12'), lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
      {time: Date.parse('2022-02-16T12:15:12'), lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
      {time: Date.parse('2022-02-16T12:16:12'), lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
      {time: Date.parse('2022-02-16T12:17:12'), lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
      {time: Date.parse('2022-02-16T12:18:12'), lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
      {time: Date.parse('2022-02-16T12:19:12'), lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
      {time: Date.parse('2022-02-16T12:20:12'), lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
      {time: Date.parse('2022-02-16T12:21:12'), lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
    ];


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
}
