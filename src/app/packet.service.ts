import {Observable, Subject, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  
  
  @Injectable({
      providedIn: 'root'
  })
  
  
    export class PacketService {
      onRefresh = new Subject();
      constructor(private http: HttpClient) {}
  
      private apiPartialEndpoint = 'http://127.0.0.1:8000';
     
      getAllClients(){
        return this.http.get(this.apiPartialEndpoint + `/v1/home`).pipe();
      }
      getUser(data: any){
        return this.http.get(this.apiPartialEndpoint + `/api/user`, data).pipe();
      }
      getAllUsers(){
        return this.http.get(this.apiPartialEndpoint + `/api/users`).pipe();
      }
    }