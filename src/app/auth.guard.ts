import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

/**
 * Created by BERNARD on 2/5/2017.
 */


export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // if (this.auth.authenticated()) {
    //   console.log('AUTH GUARD PASSED')
    //   return true;
    // } else {
    //   console.log('BLOCKED BY AUTH GUARD');
    //   this.router.navigate(['/']);
    //   return false;
    // }

    return false;
  }

}
