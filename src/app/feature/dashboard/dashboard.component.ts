import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  eTotalList: Array<any> = [
    {tag: '#INV1', tagCode: 'ESN:ES1990024910', time: Date.now(), paramValue: 151215.36},
    {tag: '#INV2', tagCode: 'ESN:6T19B9050776', time: Date.now(), paramValue: 163097.56},
    {tag: '#INV3', tagCode: 'ESN:6T19B9050776', time: Date.now(), paramValue: 163097.56},
    {tag: '#INV4', tagCode: 'ESN:6T19B9050776', time: Date.now(), paramValue: 163097.56},
    {tag: '#INV5', tagCode: 'ESN:6T19B9050776', time: Date.now(), paramValue: 163097.56},
  ];
  basicData: any;
  private verticalOptions:any;

  constructor() { }

  ngOnInit(): void {
    this.basicData = {
      labels: ['INV1', 'INV2', 'INV3', 'INV4', 'INV5', 'INV6', 'INV7', 'INV8', 'INV9','INV10','INV11','INV12','INV13'],
      datasets: [
        {
          label: 'Tổng công suất',
          backgroundColor: '#006abe',
          data: [151215.36, 163097.56, 164649.6, 162982.72, 147056.92, 161902.88, 156665.84,156665.84,156665.84,156665.84,156665.84,156665.84]
        }
      ]
    };
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

  }

}
