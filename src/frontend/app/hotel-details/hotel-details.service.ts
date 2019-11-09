import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HotelDetailsService {

  constructor(private http: HttpClient) {
  }

  getHotels(city, checkin_date, checkout_date, peopleNum) {
    return this.http.get(`http://localhost:3000/api/userSearch/${city}/${checkin_date}/${checkout_date}/${peopleNum}/getHotels`);
  }
}
