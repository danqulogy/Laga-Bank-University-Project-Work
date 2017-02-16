import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
/**
 * Created by BERNARD on 2/5/2017.
 */

@Injectable()
export class RegisterWizardGuard implements CanActivate{

  constructor(private router:Router, private storage:WindowLocalStorage){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

    if(JSON.parse(this.storage.localStorage.getItem("step"))){
      return true;
    }else{
      console.log('BLOCKED BY AUTH GUARD');
      this.router.navigate(['/']);
      return false;
    }
  }

}
