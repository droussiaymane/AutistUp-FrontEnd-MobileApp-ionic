import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService :TokenService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot):boolean{

  
    
    if(!this.tokenService.loggedIn() ){
        this.tokenService.deleteToken();
      
        this.router.navigate(["/first-page"]);
        return false;

      }
      
    return true;
    }
  
}
