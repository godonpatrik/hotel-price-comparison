import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HotelFormService} from './hotel-form.service';
import {UserSearch} from '../UserSearch';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {
  disableEndDate = true;
  hotelForm = this.fb.group({
    location: new FormControl("", Validators.required),
    startDate: new FormControl("", Validators.required),
    endDate: new FormControl({value: '', disabled: this.disableEndDate}, Validators.required),
    peopleNum: new FormControl("", [Validators.required, Validators.min(1)])
  });
  showHotelDetails: boolean;
  locationOutput: string;
  startDateOutput: string;
  endDateOutput: string;
  peopleNumOutput: string;
  todayDate: any;
  minEndDate: any;

  private userName = JSON.parse(localStorage.getItem('currentUser')).username;

  constructor(
    private fb: FormBuilder,
    private hotelFormService: HotelFormService) {
  }

  ngOnInit() {
    this.showHotelDetails = false;
    this.todayDate = new Date();
    this.onChanges();
  }

  onChanges(): void {
    this.hotelForm.get('startDate').valueChanges.pipe(take(1))
      .subscribe(startDate => {
        this.minEndDate = startDate;
        this.hotelForm.get('endDate').enable();
      });
  }

  hideHotelDetails() {
    this.hotelForm.reset();
    this.showHotelDetails = false;
  }

  onSubmit() {
    this.hotelFormService.addUserSearch(Object.assign(new UserSearch(), this.hotelForm.value), this.userName)
      .then(() => {
        this.locationOutput = this.hotelForm.value.location;
        this.startDateOutput = this.hotelForm.value.startDate;
        this.endDateOutput = this.hotelForm.value.endDate;
        this.peopleNumOutput = this.hotelForm.value.peopleNum;
        this.showHotelDetails = true;
      });
  }
}
