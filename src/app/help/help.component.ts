import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "../shared-data.service";

@Component({
  selector: "app-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.css"]
})
export class HelpComponent implements OnInit {
  theme: string;
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.theme = this.sharedDataService.getTheme();
  }
}
