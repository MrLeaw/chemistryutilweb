import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { LANGDATA } from "../langdata";
import { SharedDataService } from "../shared-data.service";

@Component({
  selector: "app-privacy",
  templateUrl: "./privacy.component.html",
  styleUrls: ["./privacy.component.css"],
})
export class PrivacyComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}
  language: string;
  imgsrc: string;
  langData = null;
  theme: string;

  @ViewChild("privacy", null) privacy: ElementRef;

  ngOnInit() {
    this.language = this.sharedDataService.getLanguage();
    this.theme = this.sharedDataService.getTheme();
    this.langData = LANGDATA[this.language];
    this.privacy.nativeElement.innerHTML = this.langData.privacyComplete;
  }
}
