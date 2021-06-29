/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-all-outlets',
  templateUrl: './all-outlets.page.html',
  styleUrls: ['./all-outlets.page.scss'],
})
export class AllOutletsPage implements OnInit {

  constructor(public functions: FunctionsService) { }

  ngOnInit() {
  }

}
