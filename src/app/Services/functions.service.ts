import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CommonService } from './common.service';
import { All_Data, Outlet_ui, Proxy, Ui } from './proxy.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  public colors: Ui[] = [];
  public data = new All_Data();
  public loader;
  public customiationSlideOpts = {
    loop: true
  };
  private orderType = 'list';

  constructor(public loadingController: LoadingController, public proxy: Proxy, public cmv: CommonService) { }

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

  dismissLoader() {
    this.loader.dismiss();
  }

  previewColor(color: Ui, el, outletUI: Outlet_ui) {
    el.style = `background: ${color.COLOR}`;

    const editOutletUI = new Outlet_ui();
    editOutletUI.UI_ID = color.UI_ID;

    this.proxy.Edit_Outlet_ui(editOutletUI).subscribe(result => {
      if (result != null) {
        this.cmv.presentNotificationToast('Changes Saved Successfully', 3000, 'success');
      }
    });
  }

}
