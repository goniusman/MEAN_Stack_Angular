import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  token: string;
  constructor(private userService: UserService, private router: Router) {
    // console.log(this.getDecodedAccessToken());
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  onSubmit() {
    const user = {
      email: this.email,
      password: this.password,
    };
    // const user = {
    //   UserName: this.email,
    //   Password: this.password,
    // };
    this.userService.login(user).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/');
      },
      (err) => {
        if (err.status == 400)
          // this.toastr.error(
          //   'Incorrect username or password.',
          //   'Authentication failed.'
          // );
          console.log('authentication faild');
        else console.log(err);
      }
    );

    this.email = '';
    this.password = '';
  }

  // setCookie(name: string, value: any, days: any) {
  //   console.log(value);
  //   var expires = '';
  //   if (days) {
  //     var date = new Date();
  //     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  //     expires = '; expires=' + date.toUTCString();
  //   }
  //   document.cookie = name + '=' + (value || '') + expires + '; path=/';
  // }

  // getCookie(token: string = 'user') {
  //   var nameEQ = token + '=';
  //   var ca = document.cookie.split(';');
  //   for (var i = 0; i < ca.length; i++) {
  //     var c = ca[i];
  //     while (c.charAt(0) == ' ') c = c.substring(1, c.length);
  //     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  //   }
  //   return null;
  // }

  // getDecodedAccessToken(): any {
  //   try {
  //     return jwt_decode(this.token);
  //   } catch (Error) {
  //     return null;
  //   }
  // }

  
}
