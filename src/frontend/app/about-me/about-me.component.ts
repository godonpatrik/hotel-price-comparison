import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AboutMeService} from "./about-me.service";
import {AuthService} from "../auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  modifyUserForm = this.fb.group({
    username: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl("", Validators.required),
    passwordAgain: new FormControl("", Validators.required)
  });

  private userName = JSON.parse(localStorage.getItem('currentUser')).username;
  private hotelSearchCount: number;
  private weatherSearchCount: number;
  private placeSearchCount: number;

  get username() {
    return this.modifyUserForm.get('username');
  }

  get email() {
    return this.modifyUserForm.get('email');
  }

  get password() {
    return this.modifyUserForm.get('password');
  }

  get passwordAgain() {
    return this.modifyUserForm.get('passwordAgain');
  }

  constructor(private fb: FormBuilder,
              private aboutMeService: AboutMeService,
              private authService: AuthService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
    this.aboutMeService.getHotelSearches(this.userName)
      .then(response => {
        this.hotelSearchCount = response.length;
      });
    this.aboutMeService.getWeatherSearches(this.userName)
      .then(response => {
        this.weatherSearchCount = response.length;
      });
    this.aboutMeService.getPlaceSearches(this.userName)
      .then(response => {
        this.placeSearchCount = response.length;
      });
    this.aboutMeService.getUserData(this.userName)
      .then(user => {
        delete user.password;
        this.modifyUserForm.patchValue(user);
      })
  }

  onSubmit() {
    const matchingPassword = this.password.value == this.passwordAgain.value;
    if (matchingPassword) {
      this.authService
        .updateUser(this.userName, this.username.value, this.password.value, this.email.value)
        .then(() => {
          this.toastrService.success('User successfully modified! Please log in again!');
          this.authService.logout();
          this.router.navigate(['/login']);
        });
    } else {
      this.toastrService.error('Passwords does not match!');
      this.modifyUserForm.reset();
    }
  }

}
