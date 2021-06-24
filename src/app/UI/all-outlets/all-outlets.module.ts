import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllOutletsPageRoutingModule } from './all-outlets-routing.module';

import { AllOutletsPage } from './all-outlets.page';
import { FloorComponent } from './floor/floor.component';
import { RoomComponent } from './floor/room/room.component';
import { OutletDigitalComponent } from './floor/room/outlet-digital/outlet-digital.component';
import { OutletDimingComponent } from './floor/room/outlet-diming/outlet-diming.component';
import { OutletCurtainComponent } from './floor/room/outlet-curtain/outlet-curtain.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllOutletsPageRoutingModule
  ],
  declarations: [AllOutletsPage, FloorComponent, RoomComponent, OutletDigitalComponent, OutletDimingComponent, OutletCurtainComponent]
})
export class AllOutletsPageModule { }
