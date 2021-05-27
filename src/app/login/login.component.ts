import { Component, OnInit } from '@angular/core';
import { IpService } from '../ip.service';
import { Md5 } from 'md5-typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [IpService]
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private ipService: IpService) { }

  ngOnInit(): void {
  }
  handleUsername(event: any){
    this.username = event.target.value;
  }
  handlePassword(event: any){
    this.password = event.target.value;
  }

  handleLogin(e: any){
    e.preventDefault();
    const md5Pass = Md5.init(this.password);
    const param = {
      email: this.username,
      password: md5Pass,
      device: 'Chrome',
      osVersion: '0.2.0',
      appVersion: '0.1'
    }
    this.ipService.login(param).toPromise().then(function(res){
      console.log(res)
    }).catch(function(e){
      console.log(e.error);
    })
  }



}
