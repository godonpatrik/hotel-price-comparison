import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.showPlacesDetails = false;
  }

  handleError($event) {
    this.placesForm.reset();
    this.showPlacesDetails = $event;
  }

  onSubmit(location: string) {
    this.locationOutput = location;
    this.showPlacesDetails = true;
  }

  hidePlaceDetails() {
    this.placesForm.reset();
    this.showPlacesDetails = false;
  }

}
