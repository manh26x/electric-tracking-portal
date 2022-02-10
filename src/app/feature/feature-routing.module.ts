import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ElectricTrackingComponent} from "./electric-tracking/electric-tracking.component";
import {FeatureComponent} from "./feature.component";
import {DashboardComponent} from "./dashboard/dashboard.component";



const routes: Routes = [
  {path: '', component: FeatureComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'view/INV/:id', component: ElectricTrackingComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
