import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// rxjs
import {first} from 'rxjs/operators';
import {Observable} from 'rxjs';

// ngrx
import {Store, select} from '@ngrx/store';
import {takeWhile, filter} from 'rxjs/internal/operators';


// router actions
import * as RouterActions from '../store/router.actions';

// login actions
import * as LoginActions from '../store/login/login.actions';

// reducers
import {
  AppState,
  getAuthenticationError,
  isAuthenticationLoading,
  isAuthenticated
} from '../../app.reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: Observable<boolean>;
  error: Observable<string>;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error = this.store.pipe(select(getAuthenticationError));
    this.loading = this.store.pipe(select(isAuthenticationLoading));
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    const payload = {
      username: this.f.username.value,
      password: this.f.password.value
    };
    this.store.dispatch(new LoginActions.LoginAction(payload));
  }
}
