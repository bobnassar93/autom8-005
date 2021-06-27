/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { Outlet, Ui } from 'src/app/Services/proxy.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  @Input() MyOutlets: Outlet[] = [];
  @Input() MyName = '';
  @Input() MyColors: Ui[] = [];
  isCollapsed = true;
  constructor() { }

  ngOnInit() { }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
