import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  constructor(private http: HttpClient) {
  }

  getEurHufRates() {
    return this.http.get('http://localhost:3000/api/externalApi/getExchangeRate');
  }
}
