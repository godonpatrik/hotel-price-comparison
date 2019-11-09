import {Component, OnInit, Input} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() dates: any;
  @Input() tempMax: any;
  @Input() tempMin: any;

  chart = [];

  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  constructor() {
  }

  ngOnInit() {
    this.getChart();
  }

  getChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.dates,
        datasets: [
          {
            data: this.tempMax,
            borderColor: '#3cba9f',
            fill: false,
            label: 'Maximum temperature'
          },
          {
            data: this.tempMin,
            borderColor: '#ffcc00',
            fill: false,
            label: 'Minimum temperature'
          }
        ]
      },
      options: {
        onResize: function (chart, size) {
          chart.options.legend.display = size.width > 600;
          chart.options.scales.xAxes[0].display = size.width > 600;
        },
        responsive: true,
        title: {
          display: true,
          text: 'Weather forecast',
          fontSize: 20
        },
        legend: {
          display: !this.isMobileDevice(),
          labels: {
            fontColor: 'rgb(0, 0, 0)'
          }
        },
        scales: {
          xAxes: [
            {
              display: !this.isMobileDevice()
            }
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0,
                suggestedMax: 50
              }
            }
          ]
        }
      }
    });
  }
}
