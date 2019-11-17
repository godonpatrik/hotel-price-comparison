import {Component, OnInit} from '@angular/core';
import {MySearchesService} from './my-searches.service';
import * as moment from 'moment';

@Component({
  selector: 'app-my-searches',
  templateUrl: './my-searches.component.html',
  styleUrls: ['./my-searches.component.css']
})
export class MySearchesComponent implements OnInit {
  private searches: any;
  private username = JSON.parse(localStorage.getItem('currentUser')).username;
  private showHotelDetails: boolean;
  private locationOutput: string;
  private startDateOutput: string;
  private endDateOutput: string;
  private peopleNumOutput: string;

  tableColumns = {
    attributeNames: ['location', 'startDate', 'endDate', 'peopleNum'],
    labels: ['Location', 'Date of start', 'Date of end', 'Number of people'],
    widths: [22.5, 22.5, 22.5, 22.5]
  };

  constructor(private mySearchesService: MySearchesService) {
  }

  ngOnInit() {
    this.showHotelDetails = false;
    this.mySearchesService.getAllHotelSearch(this.username).then(data => {
      this.searches = data;
      this.searches.forEach(element => {
        element.startDate = moment(element.startDate).format('YYYY-MM-DD');
        element.endDate = moment(element.endDate).format('YYYY-MM-DD');
      });
    });
  }

  hideHotelDetails() {
    this.showHotelDetails = false;
  }

  showHotels(element) {
    this.locationOutput = element.location;
    this.startDateOutput = element.startDate;
    this.endDateOutput = element.endDate;
    this.peopleNumOutput = element.peopleNum;
    this.showHotelDetails = true;
  }
}
