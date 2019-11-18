import {Injectable} from '@angular/core';
import {User} from './User';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getUserToken(): string {
    return JSON.parse(localStorage.getItem('currentUser')).token;
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  login(username: string, password: string) {
    return this.http.post('http://localhost:3000/api/auth/login', {
      username: username,
      password: password
    }).pipe(
      map((user: User) => {
        if (user && user['token']) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.router.navigate(['/homepage']);
        }
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  register(username: string, password: string, email: string) {
    const body = {
      username: username,
      password: password,
      email: email
    };
    return this.http.post('http://localhost:3000/api/auth/register', body).toPromise();
  }

  updateUser(prevUserName: string, newUsername: string, password: string, email: string) {
    const body = {
      prevUserName: prevUserName,
      username: newUsername,
      password: password,
      email: email
    };
    return this.http.post('http://localhost:3000/api/user/update', body).toPromise();
  }
}
