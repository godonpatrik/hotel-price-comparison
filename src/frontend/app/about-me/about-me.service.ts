import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HotelSearch} from '../HotelSearch';
import {PlaceSearch} from "../PlaceSearch";
import {WeatherSearch} from "../WeatherSearch";
import {User} from "../User";

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  getHotelSearches(username: string) {
    return this.http.get<HotelSearch[]>(`${this.baseUrl}/hotelSearch/${username}/getAllByUser`).toPromise();
  }

  getPlaceSearches(username: string) {
    return this.http.get<PlaceSearch[]>(`${this.baseUrl}/placeSearch/${username}/getAllByUser`).toPromise();
  }

  getWeatherSearches(username: string) {
    return this.http.get<WeatherSearch[]>(`${this.baseUrl}/weatherSearch/${username}/getAllByUser`).toPromise();
  }

  getUserData(username: string) {
    return this.http.get<User>(`${this.baseUrl}/user/${username}/getUser`).toPromise()
  }

}
