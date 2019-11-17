import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HotelSearch} from '../HotelSearch';

@Injectable({
  providedIn: 'root'
})
export class HotelFormService {
  private hotelSearchUrl = 'http://localhost:3000/api/hotelSearch';

  constructor(private http: HttpClient) {
  }

  addHotelSearch(hotelSearch: HotelSearch, username: string) {
    return this.http
      .post<HotelSearch>(`${this.hotelSearchUrl}/${username}/addHotelSearch`, hotelSearch).toPromise();
  }
}
