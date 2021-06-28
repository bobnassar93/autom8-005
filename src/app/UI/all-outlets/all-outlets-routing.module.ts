import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllOutletsPage } from './all-outlets.page';

const routes: Routes = [
  {
    path: '',
    component: AllOutletsPage
  },
  {
    path: 'customize',
    loadChildren: () => import('../../UI/all-outlets/customize/customize.module').then( m => m.CustomizePageModule)
  },
  {
    path: 'floor',
    loadChildren: () => import('../../UI/all-outlets/floor/floor.component').then( m => m.FloorComponent)
  },
  {
    path: 'customize',
    loadChildren: () => import('../../UI/all-outlets/customize/customize.module').then( m => m.CustomizePageModule)
  },
  {
    path: 'customize',
    loadChildren: () => import('../../UI/all-outlets/customize/customize.module').then( m => m.CustomizePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllOutletsPageRoutingModule {}
