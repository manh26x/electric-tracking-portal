import { Component, OnInit } from '@angular/core';
import {FeatureService} from "../feature.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  eTotalList: Array<any> = [];
  basicData: any;
  verticalOptions:any;
  latestTime: any;
  totalError = 0;
  private temp: any;
  chartOptions: any;

  constructor(
    private featureService: FeatureService
  ) { }

  ngOnInit(): void {
    this.basicData = {
      labels: [],
      datasets: [
        {
          label: 'Tổng công suất',
          backgroundColor: '#ee4035',
          data: []
        }
      ]
    };
    this.chartOptions = this.getLightTheme();
    this.verticalOptions = {
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
    this.temp = {
      datasets: [{
        data: [],
        backgroundColor: [
          "#42A5F5",
          "#66BB6A",
          "#FFA726",
          "#26C6DA",
          "#7E57C2",
          "#fe4a49", "#2ab7ca", "#fed766", "#e6e6ea", "#f4f4f8",
          "#051e3e", "#251e3e", "#451e3e", "#651e3e", "#851e3e",
          "#4a4e4d", "#0e9aa7", "#3da4ab", "#f6cd61", "#fe8a71",
          "#ee4035", "#f37736", "#fdf498", "#7bc043", "#0392cf"

  ],
        label: 'My dataset'
      }],
      labels: [
        "Red"]
    };
    this.featureService.getDashboard().subscribe(res => {
      this.eTotalList = [];
      this.basicData.labels = [];
      this.basicData.datasets.data = [];
      this.latestTime = res.time;
      this.totalError = res.totalError;
      this.temp.labels = [];
      res.temp.forEach( v => {
        this.temp.labels.push(v.tagName);
        this.temp.datasets[0].data.push(v.value);
      })
      res.etotal.forEach(paramValue => {
        this.eTotalList.push({
          tag: paramValue.tagName,
          tagCode: paramValue.tagCode,
          time: res.time,
          paramValue: paramValue.value
        });
        this.basicData.labels.push(paramValue.tagName);

        this.basicData.datasets[0].data.push(paramValue.value)
      })
    })


  }
  getLightTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: '#ebedef'
          }
        }
      }
    }
  }
}
