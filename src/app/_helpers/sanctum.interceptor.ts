import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_services';

@Injectable()
export class SanctumInterceptor implements HttpInterceptor {
    headerName = 'X-XSRF-TOKEN';
    constructor(private authenticationService: AuthenticationService, private tokenService: HttpXsrfTokenExtractor) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === 'GET' || request.method === 'HEAD') {
            return next.handle(request);
          }
        //   let token = this.tokenService.getToken() as string;
          const token = 'eyJpdiI6IkJRa3FBU1B5VU83RHRPYjBFVU4zWnc9PSIsInZhbHVlIjoiVFlva0hiZmo1ektpRW1FeGFETFpCOTQya2FOQ3hKQitMRVQzRkZNM2RDTFJCNy9GV0hwcWxMNlU1bi83cURYT09oYytyZk13R3RUTXlGd1ZPcnUxR2lCV0JXeWkxcXlic25ic24zMEtwVGZhb1lacG4zWHNVSGxCbkpibXE4TmUiLCJtYWMiOiIwZWNlNGU3YjE3ODRiZGM1ZDZmZjdkYjQyNjY5ZWM5MzBjYTk4M2UyODk2YTc3ZGI1NjU4ZjE0MWU1NjM1Y2M2IiwidGFnIjoiIn0';
          console.log('hereeee csrfToken', token)
          // Be careful not to overwrite an existing header of the same name.
          if (token !== null && !request.headers.has(this.headerName)) {
            request = request.clone({headers: request.headers.set(this.headerName, token)});
          }
          console.log('ggggggggg', request, next.handle(request))
          return next.handle(request);
    }
}