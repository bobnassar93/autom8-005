/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';
import { Outlet } from 'src/app/Services/proxy.service';

@Component({
  selector: 'app-outlet-diming',
  templateUrl: './outlet-diming.component.html',
  styleUrls: ['./outlet-diming.component.scss'],
})
export class OutletDimingComponent implements OnInit {
  @Input() Outlet!: Outlet;

  constructor(public functions: FunctionsService) { }

  ngOnInit() {}

}
