/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { FunctionsService } from 'src/app/services/functions.service';
import { Outlet } from 'src/app/Services/proxy.service';


@Component({
  selector: 'app-outlet-digital',
  templateUrl: './outlet-digital.component.html',
  styleUrls: ['./outlet-digital.component.scss'],
})
export class OutletDigitalComponent implements OnInit {
  @ViewChild('myDiv', {static: true}) myDevRef: ElementRef;
  @Input() Outlet!: Outlet;
  animation!: Animation;

  constructor(public functions: FunctionsService, public animationCtrl: AnimationController) {

  }

  ngOnInit() {
    this.animation = this.animationCtrl.create()
      .addElement(this.myDevRef.nativeElement)
      .duration(1000)
      .fromTo('opacity', '1', '0.5');
  }
  animate(){
    this.animation.play();
  }
}
