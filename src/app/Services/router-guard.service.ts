/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CommonService } from './common.service';
import { Router } from '@angular/router';

@Injectable()
export class RouterGuardService implements CanActivate {
  constructor(private CmSvc: CommonService, private router: Router) { }
  canActivate(): boolean {
    if (this.CmSvc.Is_Logged_In.getValue()) {
      return true;
    } else {
      this.router.navigate(['/Log-in']);
      return false;
    }
  }
}
