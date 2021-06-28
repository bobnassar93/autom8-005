/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public signalRUrl = 'https://localhost:5001/RealTimeData';
  public APIUrl = 'https://localhost:5001/api/Data';
  public ticket = '';
  Is_Logged_In = new BehaviorSubject<boolean>(false);
  UI_Direction = new BehaviorSubject<string>('ltr');
  constructor(public toastController: ToastController) { }

  ShowMessage(message: string, d: number = 3000) {
    this.presentNotificationToast(message, d, 'danger', 'middle');
  }

  Handle_Exception(msg) {
    if ((msg != null) && (msg !== '')) {
      this.ShowMessage(msg, 5000);
    }
  }

  async presentNotificationToast(message: string = '', duration: number = 2000, color?: string, position?) {
    const toast = await this.toastController.create({
      message,
      duration,
      color,
      position
    });

    toast.present();
  }
}
