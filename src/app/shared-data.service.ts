import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedDataService {
  constructor() {}

  language: string = null;
  theme: string = null;
  langChange: BehaviorSubject<boolean> = new BehaviorSubject(false);
  themeChange: BehaviorSubject<boolean> = new BehaviorSubject(false);

  getTheme(): string {
    if (this.theme == null) {
      let split = document.cookie.replace(/\s/g, "").split(";");
      for (let i = 0; i < split.length; i++) {
        let innersplit = split[i].split("=");
        if (innersplit[0] == "theme") {
          this.setTheme(innersplit[1]);
        }
      }
    }
    if (this.theme == null) {
      this.setTheme("dark");
    }
    return this.theme;
  }

  setTheme(theme): void {
    this.theme = theme;
    document.cookie =
      "theme=" +
      this.theme +
      "; expires=" +
      new Date(
        new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12
      ).toUTCString() +
      ";";
    this.themeChange.next(true);
  }

  getLanguage(): string {
    if (this.language == null) {
      let split = document.cookie.replace(/\s/g, "").split(";");
      for (let i = 0; i < split.length; i++) {
        let innersplit = split[i].split("=");
        if (innersplit[0] == "language") {
          this.setLanguage(innersplit[1]);
        }
      }
    }
    if (this.language == null) {
      this.setLanguage("en");
    }
    return this.language;
  }

  setLanguage(lang): void {
    this.language = lang;
    document.cookie =
      "language=" +
      this.language +
      "; expires=" +
      new Date(
        new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12
      ).toUTCString() +
      ";";
    this.langChange.next(true);
  }
}
