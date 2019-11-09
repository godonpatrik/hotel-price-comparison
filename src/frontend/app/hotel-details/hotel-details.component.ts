import {Component, Input, OnInit} from '@angular/core';
import {HotelDetailsService} from "./hotel-details.service";
import {take} from "rxjs/operators";
import {NgxSpinnerService} from "ngx-spinner";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  @Input() locationInput: any;
  @Input() startDateInput: any;
  @Input() endDateInput: any;
  @Input() peopleNumInput: any;
  private hotelData: any;

  constructor(private hotelDetailsService: HotelDetailsService,
              private spinnerService: NgxSpinnerService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.hotelDetailsService.getHotels(this.locationInput, this.startDateInput, this.endDateInput, this.peopleNumInput)
      .pipe(take(1))
      .subscribe(response => {
        this.spinnerService.hide();
        this.toastrService.success('Success!');
        this.hotelData = response;
      })
  }

}
