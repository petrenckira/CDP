import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// rxjs
import {Observable} from 'rxjs';

// ngrx
import {Store, select} from '@ngrx/store';

// login actions
import * as LoginActions from '../../../core/store/login/login.actions';

// reducers
import * as fromLogin from '../../../core/store/login/login.state';

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
              private store: Store<fromLogin.State>) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error = this.store.pipe(select(fromLogin.getAuthenticationError));
    this.loading = this.store.pipe(select(fromLogin.isAuthenticationLoading));
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
