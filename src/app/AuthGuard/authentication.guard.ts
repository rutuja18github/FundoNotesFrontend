import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../services/AuthguardSevice/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
 constructor(private authguardService:AuthguardService,private router:Router){}

 canActivate(): boolean {  
  if (!this.authguardService.gettoken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.authguardService.gettoken();  
}
}