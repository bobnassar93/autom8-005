/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { Outlet_ui, Room, Ui } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss'],
})
export class FloorComponent implements OnInit {
  @Input() MyRooms: Room[] = [];
  @Input() MyName = '';
  @Input() MyColors: Ui[] = [];

  isCollapsed = true;
  constructor() { }

  ngOnInit() { }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
