import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import {ElectricTrackingComponent} from "./electric-tracking/electric-tracking.component";
import {CardModule} from "primeng/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MenuModule} from "primeng/menu";
import {PanelMenuModule} from "primeng/panelmenu";
import {DividerModule} from "primeng/divider";
import {SplitterModule} from "primeng/splitter";
import {BadgeModule} from "primeng/badge";
import {TagModule} from "primeng/tag";
import {ChartModule} from "primeng/chart";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    ElectricTrackingComponent,
    FeatureComponent,
    DashboardComponent
  ],
    imports: [
        CommonModule,
        FeatureRoutingModule,
        CardModule,
        MatSidenavModule,
        MatButtonModule,
        MatRadioModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MenuModule,
        PanelMenuModule,
        DividerModule,
        SplitterModule,
        BadgeModule,
        TagModule,
        ChartModule,
        ButtonModule
    ]
})
export class FeatureModule { }
