import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FunctionsService } from 'src/app/Services/functions.service';

@Component({
  selector: 'app-all-outlets',
  templateUrl: './all-outlets.page.html',
  styleUrls: ['./all-outlets.page.scss'],
})
export class AllOutletsPage implements OnInit {

  constructor(public functions: FunctionsService, public cmv: CommonService) { }

  ngOnInit() {
  }

}
