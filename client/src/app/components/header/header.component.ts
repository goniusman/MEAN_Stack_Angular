import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: any;
  name = 'osman';
  token: any;
  @Output() showingDateformChild: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.token = localStorage.getItem('token');
    console.log(Boolean(this.token));
  }

  ngOnInit(): void {
    this.showingDateformChild.emit(this.user);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

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

  // getDecodedAccessToken() {
  //   try {
  //     return jwt_decode(this.getCookie());
  //   } catch (Error) {
  //     return null;
  //   }
  // }
}
