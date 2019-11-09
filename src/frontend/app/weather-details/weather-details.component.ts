import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeatherDetailsService} from "./weather-details.service";
import {take} from "rxjs/operators";
import {NgxSpinnerService} from "ngx-spinner";
import * as moment from "moment";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() locationInput: any;
  @Input() daysInput: any;
  @Output() errorGettingData = new EventEmitter();
  forecastData: any;
  daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  days = [];
  tempMax = [];
  tempMin = [];
  dates = [];
  showChartBoolean: boolean;
  city: string;

  constructor(private weatherDetailsService: WeatherDetailsService,
              private spinnerService: NgxSpinnerService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.weatherDetailsService
      .getWeatherForecast(this.locationInput, this.daysInput)
      .pipe(take(1))
      .subscribe(response => {
        if (response) {
          this.spinnerService.hide();
          this.toastrService.success('Success!');
          response['data'].forEach(day => {
            const date = moment(day['valid_date']);
            this.tempMax.push(day['max_temp']);
            this.tempMin.push(day['min_temp']);
            this.dates.push(day['datetime']);
            this.days.push(this.daysOfWeek[date.day()]);
          });
          this.forecastData = response['data'];
          this.city = response['city_name'];
        } else {
          this.errorGettingData.emit(false);
          this.spinnerService.hide();
          this.toastrService.error('Error during getting data!');
        }
      });
  }

  showChart() {
    this.showChartBoolean = !this.showChartBoolean;
  }

  convertToKmh(value: number) {
    return Math.round(value * 3.6);
  }

  roundValue(value: number) {
    return Math.round(value);
  }

  toReadableDate(date: any) {
    return moment(date).format('DD/MM/Y');
  }

}
