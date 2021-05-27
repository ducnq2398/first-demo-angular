import { Component, OnInit } from '@angular/core';
import { IpService } from '../ip.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [IpService]
})
export class SigninComponent implements OnInit {
  username = '';
  password = '';

  constructor(private ipService: IpService) {}

  ngOnInit(): void {
  }
  handleUsername(event: any){
    this.username = event.target.value;
  }
  handlePassword(event: any){
    this.password = event.target.value;
  }

  handleLogin(event: any){
    event.preventDefault();
    const param = {
      email: this.username,
      password: this.password,
      device: 'Chrome',
      osVersion: '0.2.0',
      appVersion: '0.1'
    }
    this.ipService.login(param).toPromise().then(function(res){
      console.log(res)
    }).catch(function(e){
      console.log(e);
    })
  }


}
