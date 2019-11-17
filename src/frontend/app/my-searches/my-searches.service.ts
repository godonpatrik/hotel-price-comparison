import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HotelSearch} from '../HotelSearch';

@Injectable({
  providedIn: 'root'
})
export class MySearchesService {
  private hotelSearchUrl = 'http://localhost:3000/api/hotelSearch';

  constructor(private http: HttpClient) {
  }

  getAllHotelSearch(username: string) {
    return this.http.get<HotelSearch[]>(`${this.hotelSearchUrl}/${username}/getAllByUser`).toPromise();
  }
}
