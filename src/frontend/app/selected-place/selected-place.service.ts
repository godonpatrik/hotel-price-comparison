import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SelectedPlaceService {

  constructor(private http: HttpClient) {
  }

  getPlaceDetails(id: string) {
    return this.http.get(`http://localhost:3000/api/externalApi/${id}/getPlaceDetails`);
  }
}
