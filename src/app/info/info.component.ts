import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "../shared-data.service";
import { LANGDATA } from "../langdata";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"],
})
export class InfoComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  mobile = false;
  langData = null;
  language = "en";
  theme = "dark";
  ngOnInit() {
    this.language = this.sharedDataService.getLanguage();
    this.theme = this.sharedDataService.getTheme();
    this.langData = LANGDATA[this.language];
    this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  langChange() {
    this.sharedDataService.setLanguage(this.language);
    this.langData = LANGDATA[this.language];
    document.cookie =
      "language=" +
      this.language +
      "; expires=" +
      new Date(
        new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12
      ).toUTCString() +
      ";";
  }

  darkModeChange() {
    this.sharedDataService.setTheme(this.theme);

    let themes = [
      "bisque",
      "dark",
      "light",
      "black",
      "blue",
      "green",
      "red",
      "space",
    ];
    themes = themes.filter((e) => e !== this.theme);

    let elements = document.getElementsByClassName(".nav-link");
    document.querySelector("body").classList.add(this.theme);
    let navlinks: any;
    for (let i = 0; i < elements.length; i++) {
      navlinks.classList.add(this.theme);
    }
    document.querySelector(".navbar").classList.add(this.theme);
    for (let i in themes) {
      document.querySelector("body").classList.remove(themes[i]);
      document.querySelector(".navbar").classList.remove(themes[i]);
      let navlinks: any;
      for (let i = 0; i < elements.length; i++) {
        navlinks.classList.remove(themes[i]);
      }
    }
  }
}
