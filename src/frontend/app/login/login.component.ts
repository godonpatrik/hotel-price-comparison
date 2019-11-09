import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService
      .login(this.username.value, this.password.value)
      .subscribe(data => {
        if (data['username'] && data['token']) {
          this.router.navigate(['/homepage']);
          this.toastrService.success('Successfully logged in!');
        } else {
          this.toastrService.error(`${data['message']}`);
        }
      })
  }
}
