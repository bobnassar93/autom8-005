/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';
import { Outlet } from 'src/app/Services/proxy.service';

@Component({
  selector: 'app-outlet-curtain',
  templateUrl: './outlet-curtain.component.html',
  styleUrls: ['./outlet-curtain.component.scss'],
})
export class OutletCurtainComponent implements OnInit {

  @Input() Outlet!: Outlet;

  constructor(public functions: FunctionsService) { }

  ngOnInit() {}

}
