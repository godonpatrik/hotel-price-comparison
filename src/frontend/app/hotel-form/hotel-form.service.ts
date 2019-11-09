import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserSearch} from '../UserSearch';

@Injectable({
  providedIn: 'root'
})
export class HotelFormService {
  private userSearchUrl = 'http://localhost:3000/api/userSearch';

  constructor(private http: HttpClient) {
  }

  addUserSearch(userSearch: UserSearch, userName: string) {
    return this.http
      .post<UserSearch>(
        `${this.userSearchUrl}/${userName}/addUserSearch`,
        userSearch
      ).toPromise();
  }
}
