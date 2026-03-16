import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class Crud {

  baseURL : string = "http://localhost:3000/Users";
  constructor(private http : HttpClient){}

  getData(){
    return this.http.get<Iuser[]>(this.baseURL);
  }
  postData(data : Iuser){
    return this.http.post(this.baseURL, data);
  }
  getDataById( id : number ){
    return this.http.get<Iuser>(`${this.baseURL}/${id}`)
  }
  putDataById( id : number, data : Iuser){
    return this.http.put(`${this.baseURL}/${id}`, data)
  }
  deleteDataById(id : number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }

}
