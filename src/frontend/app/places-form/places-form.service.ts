import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlaceSearch} from '../PlaceSearch';

@Injectable({
  providedIn: 'root'
})
export class PlacesFormService {
  private placeSearchUrl = 'http://localhost:3000/api/placeSearch';

  constructor(private http: HttpClient) {
  }

  addPlaceSearch(placeSearch: PlaceSearch, username: string) {
    return this.http
      .post<PlaceSearch>(`${this.placeSearchUrl}/${username}/addPlaceSearch`, placeSearch).toPromise();
  }
}
