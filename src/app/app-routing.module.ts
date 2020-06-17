import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormulaBalancerComponent } from "./formula-balancer/formula-balancer.component";
import { ElementListComponent } from "./element-list/element-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MolarMassComponent } from "./molar-mass/molar-mass.component";
import { InfoComponent } from "./info/info.component";
import { StoichiometryComponent } from "./stoichiometry/stoichiometry.component";
import { HelpComponent } from "./help/help.component";
import { UnitsComponent } from "./units/units.component";
import { WebhelpComponent } from "./webhelp/webhelp.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { ImpressComponent } from "./impress/impress.component";

const routes: Routes = [
  { path: "formulaBalancer", component: FormulaBalancerComponent },
  { path: "elementList", component: ElementListComponent },
  { path: "info", component: InfoComponent },
  { path: "molarMass", component: MolarMassComponent },
  { path: "stoichiometry", component: StoichiometryComponent },
  { path: "", component: DashboardComponent },
  { path: "help", component: HelpComponent },
  { path: "webhelp", component: WebhelpComponent },
  { path: "units", component: UnitsComponent },
  { path: "privacy", component: PrivacyComponent },
  { path: "impress", component: ImpressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
