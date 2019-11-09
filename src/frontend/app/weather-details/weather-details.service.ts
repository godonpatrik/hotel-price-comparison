import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDetailsService {

  constructor(private http: HttpClient) {
  }

  getWeatherForecast(city: string, days: number) {
    return this.http.get(`http://localhost:3000/api/externalApi/${city}/${days}/weather`);
  }
}
