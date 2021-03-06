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
import {TableModule} from "primeng/table";
import {MultiSelectModule} from "primeng/multiselect";
import {RippleModule} from "primeng/ripple";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {AccordionModule} from "primeng/accordion";
import {HttpClientModule} from "@angular/common/http";
import {FeatureService} from "./feature.service";
import {PaginatorModule} from "primeng/paginator";



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
    HttpClientModule,
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
    ButtonModule,
    FormsModule,
    TableModule,
    MultiSelectModule,
    RippleModule,
    CalendarModule,
    AccordionModule,
    ReactiveFormsModule,
    PaginatorModule
  ],
  providers: [FeatureService]
})
export class FeatureModule { }
