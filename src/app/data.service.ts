import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL="https://gorest.co.in/public/v1/users"

  accesstoken ="3d78d3c774fb14cdd208b19ac225f6ae879f7dd1cc8361249c7aec42bc3ad50e";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': "Bearer "+this.accesstoken}) };
  constructor(private http:HttpClient) { }

  public getUsers():Observable<any>{
    return this.http.get<any>(this.URL)
  }
  public postData(user:any):Observable<any>{
    return this.http.post<any>(`${this.URL}`,user,this.httpOptions);
  }
  public getUserbyId(id:number):Observable<any>{
    return this.http.get<any>(`${this.URL}/${id}`)
  }
  public updateUser(id:number):Observable<any>{
    return this.http.put<any>(`${this.URL}/${id}`, this.httpOptions);
  }
  public deleteUserInformation(id:number):Observable<any>{
    return this.http.delete(`${this.URL}/${id}`, this.httpOptions)
  }


}


