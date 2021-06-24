import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouterGuardService } from './Services/router-guard.service';

const routes: Routes = [
  {
    path: 'Log-in',
    loadChildren: () => import('./UI/log-in/log-in.module').then(m => m.LogInPageModule)
  },
  {
    path: '',
    redirectTo: 'Log-in',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    loadChildren: () => import('./UI/settings/settings.module').then(m => m.SettingsPageModule),
    canActivate: [RouterGuardService]
  },
  {
    path: 'outlets',
    children: [
      {
        path: '',
        loadChildren: () => import('./UI/all-outlets/all-outlets.module').then(m => m.AllOutletsPageModule),
        canActivate: [RouterGuardService]
      },
      {
        path: ':OutletId',
        loadChildren: () => import('./UI/all-outlets/customize/customize.module').then(m => m.CustomizePageModule),
        canActivate: [RouterGuardService]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
