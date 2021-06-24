/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FunctionsService } from './functions.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public APIUrl = 'http://localhost:5000/api/Data';
  public ticket = '';
  Is_Logged_In = new BehaviorSubject<boolean>(false);
  UI_Direction = new BehaviorSubject<string>('ltr');

  constructor(public functions: FunctionsService) { }

  ShowMessage(message: string, d: number = 1000) {
    this.functions.presentNotificationToast(message, d, 'danger');
  }

  Handle_Exception(msg) {
    if ((msg != null) && (msg !== '')) {
      this.ShowMessage(msg, 3000);
    }
  }
}
