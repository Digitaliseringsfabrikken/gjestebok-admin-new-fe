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
          const token = '';
          // console.log('hereeee csrfToken', token)
          // Be careful not to overwrite an existing header of the same name.
          if (token !== null && !request.headers.has(this.headerName)) {
            request = request.clone({headers: request.headers.set(this.headerName, token)});
          }
          // console.log('ggggggggg', request, next.handle(request))
          return next.handle(request);
    }
}