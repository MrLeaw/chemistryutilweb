import { enableProdMode, Injectable, ReflectiveInjector } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { SharedDataService } from "src/app/shared-data.service";

var injector = ReflectiveInjector.resolveAndCreate([SharedDataService]);
var sharedDataService = injector.get(SharedDataService);
let theme = sharedDataService.getTheme();

if (environment.production) {
  enableProdMode();
}

document.querySelector("body").classList.add(theme);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
