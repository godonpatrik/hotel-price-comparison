import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import {PlacesFormService} from "./places-form.service";
import {PlaceSearch} from "../PlaceSearch";

@Component({
  selector: 'app-venues',
  templateUrl: './places-form.component.html',
  styleUrls: ['./places-form.component.css']
})
export class PlacesFormComponent implements OnInit {

  placesForm = this.fb.group({
    location: ['', [Validators.required]]
  });

  private showPlacesDetails: boolean;
  private locationOutput: string;
  private username = JSON.parse(localStorage.getItem('currentUser')).username;

  constructor(private fb: FormBuilder, private placesFormService: PlacesFormService) {
  }

  ngOnInit() {
    this.showPlacesDetails = false;
  }

  handleError($event) {
    this.placesForm.reset();
    this.showPlacesDetails = $event;
  }

  onSubmit(location: string) {
    this.placesFormService.addPlaceSearch(Object.assign(new PlaceSearch(), this.placesForm.value), this.username)
      .then(() => {
        this.locationOutput = location;
        this.showPlacesDetails = true;
      });

  }

  hidePlaceDetails() {
    this.placesForm.reset();
    this.showPlacesDetails = false;
  }

}
