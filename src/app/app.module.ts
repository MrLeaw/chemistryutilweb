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
import { WebhelpComponent } from './webhelp/webhelp.component';
import { ImpressComponent } from './impress/impress.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContenteditableModule } from '@ng-stack/contenteditable';

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
    WebhelpComponent,
    ImpressComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    FormsModule,
    ContenteditableModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
