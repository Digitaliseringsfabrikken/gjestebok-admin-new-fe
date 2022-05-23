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
  
      private apiPartialEndpoint = 'https://75b040bf-c2ab-4e2d-8f32-14bebf70e09b.mock.pstmn.io/%20';
     
      getAllClients(){
        return this.http.get(this.apiPartialEndpoint + `/v1/home`).pipe();
      }
    }