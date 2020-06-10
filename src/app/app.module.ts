import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormulaBalancerComponent } from "./formula-balancer/formula-balancer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ElementListComponent } from "./element-list/element-list.component";
import { FormsModule } from "@angular/forms";
import { MolarMassComponent } from "./molar-mass/molar-mass.component";
import { InfoComponent } from "./info/info.component";
import { StoichiometryComponent } from "./stoichiometry/stoichiometry.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HelpComponent } from "./help/help.component";
import { ParticlesModule } from "angular-particle";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UnitsComponent } from "./units/units.component";

@NgModule({
  declarations: [
    AppComponent,
    FormulaBalancerComponent,
    DashboardComponent,
    ElementListComponent,
    MolarMassComponent,
    InfoComponent,
    StoichiometryComponent,
    HelpComponent,
    UnitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
