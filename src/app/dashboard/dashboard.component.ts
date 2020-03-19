import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "../shared-data.service";
import { LANGDATA } from "../langdata";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  showCookieMessage = true;

  langData = LANGDATA.en;
  theme: string;
  language: string;
  ngOnInit() {
    this.theme = this.sharedDataService.getTheme();
    console.log(this.theme);
    this.language = this.sharedDataService.getLanguage();
    this.langData = LANGDATA[this.language];
    let split = document.cookie.replace(/\s/g, "").split(";");
    for (let i = 0; i < split.length; i++) {
      let innersplit = split[i].split("=");
      if (innersplit[0] == "cookieaccepted" && innersplit[1]) {
        this.showCookieMessage = false;
      }
    }
  }

  removeError() {
    this.showCookieMessage = false;
    document.cookie =
      "cookieaccepted=true; expires=" +
      new Date(
        new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12
      ).toUTCString() +
      ";";
  }
}
