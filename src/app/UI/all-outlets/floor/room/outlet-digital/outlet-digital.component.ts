/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';
import { Outlet } from 'src/app/Services/proxy.service';

@Component({
  selector: 'app-outlet-digital',
  templateUrl: './outlet-digital.component.html',
  styleUrls: ['./outlet-digital.component.scss'],
})
export class OutletDigitalComponent implements OnInit {

  @Input() Outlet!: Outlet;

  constructor(public functions: FunctionsService) { }

  ngOnInit() {}

}
