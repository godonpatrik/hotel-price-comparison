import {Component, OnInit} from '@angular/core';
import {HomePageService} from './home-page.service';
import {take} from 'rxjs/operators';
import * as moment from 'moment';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private rates: any;
  private day: string;
  private date: any;
  private time = new Date();
  daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  private isLoggedIn: boolean;

  constructor(
    private homePageService: HomePageService,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.date = new Date();
      const dayNum = moment(this.date).day();
      this.day = this.daysOfWeek[dayNum];
      this.homePageService
        .getEurHufRates()
        .pipe(take(1))
        .subscribe(response => {
          this.rates = response;
        });
      setInterval(() => {
        this.time = new Date();
      }, 1000);
    }
  }
}
