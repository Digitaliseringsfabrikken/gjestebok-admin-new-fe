import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services';
import {PacketService} from '../packet.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: any;
    error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private packetService: PacketService
  ) {
    if (this.authenticationService.userValue) { 
      this.router.navigate(['/']);
  }
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      console.log('this.f.email.value', this.f.email.value, this.f.password.value)
      this.authenticationService.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                console.log('dataa',  data)
                this.router.navigate(['admin-dashboard']);
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }

}
