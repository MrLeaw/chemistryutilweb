import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { LANGDATA } from "../langdata";
import { SharedDataService } from "../shared-data.service";

@Component({
  selector: "app-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.css"],
})
export class HelpComponent implements OnInit {
  mobile = false;
  langData = null;
  language = "en";
  theme = "dark";
  constructor(private sharedDataService: SharedDataService) {}

  @ViewChild("delhelp", null) delhelp: ElementRef;
  ngOnInit() {
    this.language = this.sharedDataService.getLanguage();
    this.theme = this.sharedDataService.getTheme();
    this.langData = LANGDATA[this.language];
    this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    this.delhelp.nativeElement.innerHTML = this.langData.delHelp;
  }
}
