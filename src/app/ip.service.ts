import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 @Injectable()

 export class IpService{
   constructor(private http: HttpClient ) {}

   login(param: any){
     return this.http.post('https://datnxeoffice.azurewebsites.net/api/accounts/login',param);
   }

 }
