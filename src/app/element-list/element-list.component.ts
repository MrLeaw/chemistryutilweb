import { Component, OnInit } from "@angular/core";
import { ElementData, ElementState } from "../types";
import { DATA } from "../data";
import { SharedDataService } from "../shared-data.service";
import { LANGDATA } from "../langdata";

@Component({
  selector: "app-element-list",
  templateUrl: "./element-list.component.html",
  styleUrls: ["./element-list.component.css"]
})
export class ElementListComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}
  string: string = "";
  mobile: boolean;
  langData = null;
  language: string;
  theme: string;
  data = DATA;
  ngOnInit() {
    this.language = this.sharedDataService.getLanguage();
    this.theme = this.sharedDataService.getTheme();
    this.langData = LANGDATA[this.language];
    this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    console.log(this.mobile);
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].molareMasse =
        Math.round(this.data[i].molareMasse * 100) / 100;
      if (this.data[i].state == null) {
        if (this.data[i].siedepunkt < 20) {
          this.data[i].state = ElementState.gas;
        } else if (this.data[i].schmelzpunkt < 20) {
          this.data[i].state = ElementState.liquid;
        } else {
          this.data[i].state = ElementState.solid;
        }
      }
    }
  }
}
