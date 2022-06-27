import {Observable, Subject, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'X-XSRF-TOKEN': 'eyJpdiI6IkxlandDdU1ZejJ2Q29adE1FQkhWZ1E9PSIsInZhbHVlIjoiUnUwb1pDV3REL3VUMkN6cVBNeGxaekI3Sk5scndqMUxyZUZzbkhxUTFDNzd5eGtlQlpMbmVKNExOUzZvZ'

  })
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
        return this.http.get(this.apiPartialEndpoint + `/api/users`, httpOptions).pipe();
      }
      getAllUsers1(): Observable<string[]> {
        return this.http.get<string[]>(this.apiPartialEndpoint + '/api/users', httpOptions);
      }
      getLoggedInUser(){
        return this.http.get(this.apiPartialEndpoint + `/api/user/loggedin`).pipe();
      }
      getAllRoles(){
        return this.http.get(this.apiPartialEndpoint + `/api/roles`).pipe();
      }
    }