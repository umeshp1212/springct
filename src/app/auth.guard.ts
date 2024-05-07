import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutheticationService } from './authetication.service';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AutheticationService, private router: Router) { }

   canActivate(): boolean {
    if(this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false
    }    
  }    
  
}
