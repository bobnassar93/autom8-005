/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { Outlet, Outlet_ui, Ui } from 'src/app/Services/proxy.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  @Input() MyOutlets: Outlet[] = [];
  @Input() MyName = '';
  @Input() MyColors: Ui[] = [];
  @Input() MyOutletUI: Outlet_ui;

  isCollapsed = true;
  constructor() { }

  ngOnInit() { }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
