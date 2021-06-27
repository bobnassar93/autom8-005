import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { All_Data, Ui } from './proxy.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  public colors = [];
  public data = new All_Data();
  public loader;
  public customiationSlideOpts = {
    loop: true
  };
  private orderType = 'list';

  constructor(public toastController: ToastController, public loadingController: LoadingController) { }

  async presentNotificationToast(message: string = '', duration: number = 2000, color?: string, position?) {
    const toast = await this.toastController.create({
      message,
      duration,
      color,
      position
    });

    toast.present();
  }

  manualToggle = (event, toggle?) => {
    if (this.orderType === 'list') {
      toggle.el.checked = !toggle.el.checked;
    }
    else {
      if (event.target.tagName === 'DIV') {
        event.target.classList.toggle('light-active');
      }
      else {
        event.target.parentElement.classList.toggle('light-active');
      }
    }
  };

  toggleLight = (item, toggle?): void => {
    console.log(item, toggle);
  };

  changeDimmingValue(event, toggle?) {
    const opacity = event.target.value / 100;

    if (toggle.el.checked) {
      toggle.el.style = `--handle-box-shadow: 0 0 10px 0 rgba(233, 181, 39, ${opacity});
      box-shadow: 0 0 10px 10px rgba(233, 181, 39, ${opacity});`;
    } else {
      toggle.el.style = `--handle-box-shadow: 0 0 10px 0 rgba(233, 181, 39, ${opacity});
    box-shadow: 0 0 10px 10px rgba(233, 181, 39, ${opacity});
    ${opacity > 0 ? `--handle-background-checked: rgba(255, 255, 255, ${opacity})` : ''}`;
    }

    if (opacity === 0) {
      toggle.el.checked = false;
    }
    else {
      toggle.el.checked = true;
    }
  }

  async showLoader(message = 'Please wait...') {
    this.loader = await this.loadingController.create({
      message,
      translucent: true
    });

    await this.loader.present();
  }

  dismissLoader(){
    this.loader.dismiss();
  }

  previewColor(color, el) {
    el.style = `background: ${color.COLOR}`;
   // this.functions.items[this.index].outlets[this.id].backgroundColor = color;
  }

}
