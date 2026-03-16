import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root',
})
export class Resource {
  constructor(private http: HttpClient){}
  
  baseUrl : string = "http://fake-store-api.mock.beeceptor.com";
  
  // getAllData(){
  //   return this.http.get(`${this.baseUrl}/api/users`)  
  // }

  rxResourceData = rxResource({
    stream : () => this.http.get(`${this.baseUrl}/api/users`) 
  })
  resourceData = resource({
    loader : () => fetch(`${this.baseUrl}/api/users`).then(r => r.json() as Promise<any>)
  })
}
