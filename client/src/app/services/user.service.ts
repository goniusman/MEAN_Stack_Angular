import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../Model/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:5000/api/users/';
  // apiUrl = 'http://localhost:60330/api/ApplicationUser/';

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  addUser(post): Observable<any> {
    
    console.log(this.apiUrl + 'register');
    // debugger;

    return this.http.post(this.apiUrl + 'register', post, httpOptions);
  }

  login(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login', post, httpOptions);
  }

  getUserProfile() {
    return this.http.get('http://localhost:60330/api/UserProfile/ForAdmin');
  }

  // formModel = this.fb.group({
  //   UserName: ['', Validators.required],
  //   Email: ['', Validators.email],
  //   FullName: [''],
  //   Passwords: this.fb.group(
  //     {
  //       Password: ['', [Validators.required, Validators.minLength(4)]],
  //       ConfirmPassword: ['', Validators.required],
  //     },
  //     { validator: this.comparePasswords }
  //   ),
  // });

  // comparePasswords(fb: FormGroup) {
  //   let confirmPswrdCtrl = fb.get('ConfirmPassword');
  //   //passwordMismatch
  //   //confirmPswrdCtrl.errors={passwordMismatch:true}
  //   if (
  //     confirmPswrdCtrl.errors == null ||
  //     'passwordMismatch' in confirmPswrdCtrl.errors
  //   ) {
  //     if (fb.get('Password').value != confirmPswrdCtrl.value)
  //       confirmPswrdCtrl.setErrors({ passwordMismatch: true });
  //     else confirmPswrdCtrl.setErrors(null);
  //   }
  // }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(
      window.atob(localStorage.getItem('token').split('.')[1])
    );
    var userRole = payLoad.role;
    console.log('rolmatch func ' + userRole);
    allowedRoles.forEach((element) => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    console.log(isMatch);
    return isMatch;
  }
}
