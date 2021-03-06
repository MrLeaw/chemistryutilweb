import { Component, OnInit, NgModule, Inject } from "@angular/core";
import { SharedDataService } from "./shared-data.service";
import { filter } from "rxjs/operators";
import { LANGDATA } from "./langdata";
import { Router, NavigationEnd, RouterEvent } from "@angular/router";
import { DOCUMENT } from "@angular/common";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  langData = LANGDATA.en;
  language: string;
  theme: string;
  bgSrc: string;
  title = "Chemie Utility";
  myStyle: object = {};
  myParams: object = {};
  planetSrc: string = "";
  width: number = 100;
  height: number = 100;

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit() {
    let planets = ["mars", "saturn", "jupiter"];
    let rand = Math.floor(Math.random() * planets.length);
    this.planetSrc = "../assets/images/" + planets[rand] + ".png";
    this.myStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };
    this.myParams = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 100,
            size: 0,
            duration: 6,
            opacity: 0.25,
            speed: 3,
          },
          repulse: {
            distance: 50,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };

    this.language = this.sharedDataService.getLanguage();
    this.langData = LANGDATA[this.language];
    this.theme = this.sharedDataService.getTheme();
    this.sharedDataService.themeChange.subscribe((val) => {
      if (val === true) {
        this.theme = this.sharedDataService.getTheme();
      }
    });
    this.sharedDataService.langChange.subscribe((val) => {
      if (val === true) {
        this.language = this.sharedDataService.getLanguage();
        this.langData = LANGDATA[this.language];
      }
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (
          (event as RouterEvent).url == "" ||
          (event as RouterEvent).url == "/"
        ) {
          this.document.body.style.backgroundImage =
            "url('assets/images/bg.jpg')";
        } else {
          this.document.body.style.backgroundImage = "url('')";
        }
      });
  }
}
