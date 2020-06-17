import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { LANGDATA } from "../langdata";
import { SharedDataService } from "../shared-data.service";

@Component({
  selector: "app-impress",
  templateUrl: "./impress.component.html",
  styleUrls: ["./impress.component.css"],
})
export class ImpressComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}
  language: string;
  imgsrc: string;
  langData = null;
  theme: string;

  @ViewChild("impress", null) impress: ElementRef;

  ngOnInit() {
    this.language = this.sharedDataService.getLanguage();
    this.theme = this.sharedDataService.getTheme();
    this.langData = LANGDATA[this.language];
    this.impress.nativeElement.innerHTML = this.langData.impressComplete;
  }
}
