import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';

// import rxjs
import { Observable} from 'rxjs/Rx';

// import @ngrx
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (localStorage.getItem('currentUser')) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
