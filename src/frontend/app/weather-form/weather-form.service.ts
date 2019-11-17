import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherSearch} from '../WeatherSearch';

@Injectable({
  providedIn: 'root'
})
export class WeatherFormService {
  private weatherSearchUrl = 'http://localhost:3000/api/weatherSearch';

  constructor(private http: HttpClient) {
  }

  addWeatherSearch(weatherSearch: WeatherSearch, username: string) {
    return this.http
      .post<WeatherSearch>(`${this.weatherSearchUrl}/${username}/addWeatherSearch`, weatherSearch).toPromise();
  }
}
