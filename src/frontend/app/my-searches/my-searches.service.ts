import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserSearch} from '../UserSearch';

@Injectable({
  providedIn: 'root'
})
export class MySearchesService {
  private userSearchUrl = 'http://localhost:3000/api/userSearch';

  constructor(private http: HttpClient) {
  }

  getAllUserSearch(userName: string) {
    return this.http
      .get<UserSearch[]>(`${this.userSearchUrl}/${userName}/getAllByUser`)
      .toPromise();
  }
}
