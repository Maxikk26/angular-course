import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
 
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromersasComponent } from './promersas/promersas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations:[
      PagesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      IncrementadorComponent,
      AccountSettingsComponent,
      PromersasComponent,
      RxjsComponent
  ],
  exports:[
      PagesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component
  ],
  imports:[
      SharedModule,
      PAGES_ROUTES,
      FormsModule
  ]
})

export class PagesModule{}