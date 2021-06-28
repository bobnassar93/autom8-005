/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController, IonSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { FunctionsService } from 'src/app/services/functions.service';
import { Outlet, Outlet_ui, Ui, Proxy } from 'src/app/Services/proxy.service';
import * as signalR from '@microsoft/signalr';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-outlet-digital',
  templateUrl: './outlet-digital.component.html',
  styleUrls: ['./outlet-digital.component.scss'],
})
export class OutletDigitalComponent implements OnInit, OnDestroy {

  @ViewChild('myDiv', { static: true }) myDevRef: ElementRef;
  @Input() Outlet!: Outlet;
  @Input() MyColors: Ui[] = [];
  @Input() MyOutletUI: Outlet_ui;
  proxyEditOutlet: Subscription;
  paramsEditOutlet: Outlet;
  openAnimation!: Animation;
  closeAnimation!: Animation;
  isOpen = false;
  private hubConnection: signalR.HubConnection;

  constructor(public functions: FunctionsService, public animationCtrl: AnimationController, public proxy: Proxy, private cmv: CommonService) {

  }

  ngOnInit(): void {
    this.openAnimation = this.animationCtrl.create()
      .addElement(this.myDevRef.nativeElement)
      .duration(150)
      .fromTo('height', '0', 'max-content')
      .fromTo('overflow', 'hidden', 'visible')
      .fromTo('marginTop', '0', '20px');

    this.closeAnimation = this.animationCtrl.create()
      .addElement(this.myDevRef.nativeElement)
      .duration(150)
      .fromTo('height', 'max-content', '0')
      .fromTo('overflow', 'visible', 'hidden')
      .fromTo('marginTop', '20px', '0');

    this.paramsEditOutlet = new Outlet();
    this.paramsEditOutlet = this.Outlet;

    this.startConnection();
    this.realTimeData();

    console.log(this.cmv.ticket);
  }

  ngOnDestroy(): void {
    this.proxyEditOutlet.unsubscribe();
  }

  animate(ev) {
    if (this.isOpen === true) {
      this.isOpen = false;
      ev.target.style.transform = 'rotate(0deg)';
      this.closeAnimation.play().finally(() => {
        this.openAnimation.stop();
      });
    } else {
      this.isOpen = true;
      ev.target.style.transform = 'rotate(90deg)';
      this.openAnimation.play().finally(() => {
        this.closeAnimation.stop();
      });
    }
  }

  toggleLight(toggle): void {
    this.paramsEditOutlet.CURRENT_VALUE = '0';

    if (toggle.el.checked) {
      this.paramsEditOutlet.CURRENT_VALUE = '1';
    }

    this.proxyEditOutlet = this.proxy.Edit_Outlet(this.paramsEditOutlet).subscribe();
  }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.cmv.signalRUrl)
      .build();
    this.hubConnection.start().then(() => {
      console.log('SignalR Connection Started');
    }).catch(err => console.log('Error while starting connection: ' + err));
  }

  public realTimeData = () => {
    this.hubConnection.on('updatedOutlet', (data) => {
      this.Outlet = data;
      console.log(data);
    });
  }
}
