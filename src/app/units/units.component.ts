import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "../shared-data.service";
import { LANGDATA } from "../langdata";
import { UNITS } from "../units";

@Component({
  selector: "app-units",
  templateUrl: "./units.component.html",
  styleUrls: ["./units.component.css"],
})
export class UnitsComponent implements OnInit {
  langData = null;
  language: string;
  theme: string;
  result: string;
  units;
  categories: Array<string> = [];
  startUnit;
  endUnit;
  currentUnits: Array<any>;
  input: string;
  currentCategory: string;
  constructor(private sharedDataService: SharedDataService) {}

  getCategories() {
    this.units.forEach((unit) => {
      if (!this.categories.includes(unit.Kategorie)) {
        this.categories.push(unit.Kategorie);
      }
    });
    this.currentCategory = this.categories[0];
  }
  categoryChange() {
    this.currentUnits = this.getUnitsForCategory();
    this.startUnit = this.currentUnits[0].Name;
    this.endUnit = this.currentUnits[1].Name;
    this.calculate();
  }

  getUnitsForCategory(): Array<any> {
    let units = [];
    for (var i = 0; i < this.units.length; i++) {
      if (this.units[i].Kategorie == this.currentCategory) {
        units.push(this.units[i]);
      }
    }
    return units;
  }

  getUnitByName(name: string): any {
    for (var i = 0; i < this.units.length; i++) {
      if (this.units[i].Name == name) {
        return this.units[i];
      }
    }
  }

  getDefaultUnitForCategory(category: string): any {
    for (var i = 0; i < this.units.length; i++) {
      if (this.units[i].Kategorie == category && this.units[i].Standard) {
        return this.units[i];
      }
    }
  }

  calculate() {
    if (this.input == undefined || this.input == "" || this.input == null) {
      this.result = "";
      return;
    }
    if (this.startUnit == "" || this.endUnit == "") {
      return;
    }
    if (this.startUnit == this.endUnit) {
      this.result = this.input;
    }
    var unit1 = this.getUnitByName(this.startUnit);
    var unit2 = this.getUnitByName(this.endUnit);
    var defaultUnit = this.getDefaultUnitForCategory(this.currentCategory);

    var x: number = parseFloat(this.input.replace(",", "."));

    if (!unit1.Standard) {
      x = x - unit1.Add;
      x = x / unit1.Multiply;
    }

    if (!unit2.Standard) {
      x = x * unit2.Multiply;
      x = x + unit2.Add;
    }

    this.result = x + "";
  }

  /*


  // convert from default unit to result unit
  if not unit2.default then
  begin
    x := x * unit2.multiply;
    x := x + unit2.add;
  end;

  // output result
  Form1.LAusgabeCalc.Caption := FloatToStrF(x, ffFixed, 10, 6);
end;
  
  */

  ngOnInit() {
    this.language = this.sharedDataService.getLanguage();
    this.theme = this.sharedDataService.getTheme();
    this.langData = LANGDATA[this.language];
    this.units = UNITS;
    this.getCategories();
    this.categoryChange();
  }
}
