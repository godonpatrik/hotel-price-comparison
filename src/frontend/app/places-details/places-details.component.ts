import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {take} from "rxjs/operators";
import {PlacesDetailsService} from "./places-details.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.component.html',
  styleUrls: ['./places-details.component.css']
})
export class PlacesDetailsComponent implements OnInit {
  @Input() locationInput: any;
  @Output() errorGettingData = new EventEmitter();
  private places: any;
  private showSelectedPlace: boolean;
  private selectedPlaceId: string;

  constructor(private placesDetailsService: PlacesDetailsService,
              private spinnerService: NgxSpinnerService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.placesDetailsService
      .getPlaces(this.locationInput)
      .pipe(take(1))
      .subscribe(response => {
        if (response['status'] === 400) {
          this.errorGettingData.emit(false);
          this.spinnerService.hide();
          this.toastrService.error('Error during getting data!');
        } else {
          this.spinnerService.hide();
          this.toastrService.success('Success!');
          this.places = response['response'];
        }
      })
  }

  showVenue(venue) {
    this.showSelectedPlace = true;
    this.selectedPlaceId = venue.venue.id;
  }

  hideSelectedPlace() {
    this.showSelectedPlace = false;
  }

}
