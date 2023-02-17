import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UcesnikGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(){

    let tip = localStorage.getItem("tip");
    if(!tip){
      this.router.navigate([""]);
      return false;
    }

    if(tip == "2"){
      return true;
    }else{
      this.router.navigate([""]);
      return false;
    }
  }
  }
  
