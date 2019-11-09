import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  registerForm = this.fb.group({
    username: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl("", Validators.required),
    passwordAgain: new FormControl("", Validators.required)
  });

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get passwordAgain() {
    return this.registerForm.get('passwordAgain');
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
    const matchingPassword = this.password.value == this.passwordAgain.value;
    if (matchingPassword) {
      this.authService
        .register(this.username.value, this.password.value, this.email.value)
        .then(() => {
          this.toastrService.success('Successfully registered! Please log in!');
          this.router.navigate(['/login']);
        });
    } else {
      this.toastrService.error('Passwords does not match!');
      this.registerForm.reset();
    }
  }
}
