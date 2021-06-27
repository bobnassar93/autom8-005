import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { FunctionsService } from 'src/app/Services/functions.service';
import { Params_Get_All_Data, Proxy, UserInfo } from 'src/app/Services/proxy.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  proxyAllData: Subscription;
  public userName = '';
  public password = '';

  constructor(public proxy: Proxy, public functions: FunctionsService, public cmv: CommonService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    if ((this.userName !== '') && (this.password !== '')) {

      this.functions.showLoader('Logging In, Please Wait...');

      const paramsAllData = new Params_Get_All_Data();
      paramsAllData.My_UserInfo = new UserInfo();
      paramsAllData.My_UserInfo.UserName = this.userName;
      paramsAllData.My_UserInfo.Password = this.password;
      paramsAllData.My_UserInfo.IsAuthenticated = false;
      paramsAllData.My_UserInfo.OwnerID = 1;
      paramsAllData.My_UserInfo.UserID = 1;
      paramsAllData.My_UserInfo.Ticket = '';

      this.proxyAllData = this.proxy.Get_All_Data(paramsAllData).subscribe(
        result => {
          this.functions.dismissLoader();
          if (result != null) {
            if (result.User.IsAuthenticated === true) {
              this.cmv.Is_Logged_In.next(result.User.IsAuthenticated);
              this.cmv.ticket = result.User.Ticket;
              this.functions.colors = result.MyColors;
              this.functions.data = result;
              this.router.navigate(['/outlets']);
            }
          }
        }
      );
    }else{
      this.functions.presentNotificationToast('Username and Password are required!', 3000, 'danger', 'top');
    }
  }
}
