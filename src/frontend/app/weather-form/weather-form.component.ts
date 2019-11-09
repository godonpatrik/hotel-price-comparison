import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {
  weatherForm = this.fb.group({
    location: new FormControl("", Validators.required),
    days: new FormControl("", [Validators.required, Validators.min(1), Validators.max(17)])
  });
  locationOutput: string;
  daysOutput: string;
  showWeatherDetails: boolean;

  constructor(
    private fb: FormBuilder) {
  }

  hideWeatherDetails() {
    this.weatherForm.reset();
    this.showWeatherDetails = false;
  }

  ngOnInit() {
    this.showWeatherDetails = false;
  }

  handleError() {
    this.hideWeatherDetails();
  }

  onSubmit(location: string, days: string) {
    this.locationOutput = location;
    this.daysOutput = days;
    this.showWeatherDetails = true;
  }

}
