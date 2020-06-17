import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { LANGDATA } from "../langdata";
import { SharedDataService } from "../shared-data.service";

@Component({
  selector: "app-webhelp",
  templateUrl: "./webhelp.component.html",
  styleUrls: ["./webhelp.component.css"],
})
export class WebhelpComponent implements OnInit {
  mobile = false;
  langData = null;
  language = "en";
  theme = "dark";
  constructor(private sharedDataService: SharedDataService) {}

  @ViewChild("webhelp", null) webhelp: ElementRef;
  ngOnInit() {
    this.language = this.sharedDataService.getLanguage();
    this.theme = this.sharedDataService.getTheme();
    this.langData = LANGDATA[this.language];
    this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    this.webhelp.nativeElement.innerHTML = this.langData.webHelp;
  }
}
