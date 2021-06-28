/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import * as signalR from '@microsoft/signalr';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { Outlet, Outlet_ui, Ui } from 'src/app/Services/proxy.service';

@Component({
  selector: 'app-outlet-diming',
  templateUrl: './outlet-diming.component.html',
  styleUrls: ['./outlet-diming.component.scss'],
})
export class OutletDimingComponent implements OnInit, OnDestroy {
  @ViewChild('myDiv', { static: true }) myDevRef: ElementRef;
  @Input() Outlet!: Outlet;
  @Input() MyColors: Ui[] = [];
  @Input() MyOutletUI: Outlet_ui;
  proxyEditOutlet: Subscription;
  openAnimation!: Animation;
  closeAnimation!: Animation;
  isOpen = false;
  private hubConnection: signalR.HubConnection;

  constructor(public functions: FunctionsService, public animationCtrl: AnimationController, private cmv: CommonService) {

  }
  ngOnDestroy(): void {
    if (this.proxyEditOutlet) {
      this.proxyEditOutlet.unsubscribe();
    }
  }

  ngOnInit() {
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
  }
  animate(ev) {
    if (this.isOpen === true) {
      this.isOpen = false;
      ev.target.style.transform = 'rotate(0deg)';
      this.closeAnimation.play().finally(()=>{
        this.openAnimation.stop();
      });;
    } else {
      this.isOpen = true;
      ev.target.style.transform = 'rotate(90deg)';
      this.openAnimation.play().finally(()=>{
        this.closeAnimation.stop();
      });
    }
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
