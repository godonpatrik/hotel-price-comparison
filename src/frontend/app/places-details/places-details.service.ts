import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesDetailsService {

  constructor(private http: HttpClient) {
  }

  getPlaces(city: string) {
    return this.http.get(`http://localhost:3000/api/externalApi/${city}/getPlaces`);
  }

}
