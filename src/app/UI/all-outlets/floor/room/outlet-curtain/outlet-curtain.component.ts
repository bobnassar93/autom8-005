/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { FunctionsService } from 'src/app/services/functions.service';
import { Outlet, Outlet_ui, Ui } from 'src/app/Services/proxy.service';

@Component({
  selector: 'app-outlet-curtain',
  templateUrl: './outlet-curtain.component.html',
  styleUrls: ['./outlet-curtain.component.scss'],
})
export class OutletCurtainComponent implements OnInit {
  @ViewChild('myDiv', { static: true }) myDevRef: ElementRef;
  @Input() Outlet!: Outlet;
  @Input() MyColors: Ui[] = [];
  @Input() MyOutletUI: Outlet_ui;

  openAnimation!: Animation;
  closeAnimation!: Animation;
  isOpen = false;

  constructor(public functions: FunctionsService, public animationCtrl: AnimationController) {

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
}
