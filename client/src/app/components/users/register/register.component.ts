import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../Model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  users: User[] = [];
  password: string;
  role: string;
  email: string;
  name: string;
  confirmPassword: string;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {

    // debugger;
    if (!this.name) {
      alert('please provide name');
      return;
    }
    if (!this.email) {
      alert('please provide email');
      return;
    }
    // if (!this.role) {
    //   alert('please provide role');
    //   return;
    // }
    if (!this.password) {
      alert('please provide password');
      return;
    }

    const user = {
      name: this.name,
      email: this.email,
      role: this.role,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };

    // const user = {
    //   UserName: this.name,
    //   Email: this.email,
    //   Password: this.password,
    //   FullName: 'Osman Goni',
    //   confirmPassword: this.confirmPassword,
    // };

    this.userService.addUser(user).subscribe((user) => this.users.push(user));

    this.name = '';
    this.email = '';
    this.role = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
