import {Component, Input, OnInit} from '@angular/core';
import {SelectedPlaceService} from "./selected-place.service";
import {take} from "rxjs/operators";
import {NgxSpinnerService} from "ngx-spinner";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-selected-place',
  templateUrl: './selected-place.component.html',
  styleUrls: ['./selected-place.component.css']
})
export class SelectedPlaceComponent implements OnInit {
  @Input() selectedPlaceId: any;
  private selectedPlaceData: any;

  constructor(private selectedPlaceService: SelectedPlaceService,
              private spinnerService: NgxSpinnerService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.selectedPlaceService.getPlaceDetails(this.selectedPlaceId)
      .pipe(take(1))
      .subscribe(response => {
        this.spinnerService.hide();
        this.toastrService.success('Success!');
        this.selectedPlaceData = response['response']['venue'];
      })
  }

}
