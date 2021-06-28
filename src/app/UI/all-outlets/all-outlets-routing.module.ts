import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllOutletsPage } from './all-outlets.page';

const routes: Routes = [
  {
    path: '',
    component: AllOutletsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllOutletsPageRoutingModule {}
