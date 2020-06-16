import { Component, OnInit } from "@angular/core";
import { DATA } from "../data";
import { Molecule, Atom, State, Case, StochiometrieField } from "../types";
import { Ptor } from "protractor";
import { SharedDataService } from "../shared-data.service";
import { LANGDATA } from "../langdata";

@Component({
  selector: "app-stoichiometry",
  templateUrl: "./stoichiometry.component.html",
  styleUrls: ["./stoichiometry.component.css"],
})
export class StoichiometryComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  data = DATA;
  substance1: string;
  substance2: string;
  mass1: string;
  mass2: string;
  amount1: string;
  amount2: string;
  langData = null;
  language: string;
  theme: string;
  ngOnInit() {
    this.language = this.sharedDataService.getLanguage();
    this.theme = this.sharedDataService.getTheme();
    this.langData = LANGDATA[this.language];
  }

  charIsLetter(casetocheck: Case, char: string): boolean {
    let lowercaseLetters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let uppercaseLetters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    for (var i = 0; i < 26; i++) {
      if (casetocheck == Case.Lowercase) {
        if (char == lowercaseLetters[i]) {
          return true;
        }
      } else {
        if (char == uppercaseLetters[i]) {
          return true;
        }
      }
    }
    return false;
  }

  isInteger(value: string): boolean {
    return !isNaN(Number(value));
  }

  seperateMolecule(value: string): Molecule {
    let atom = new Atom();
    let molecule = new Molecule();
    let state: State;
    let currentval = "";
    for (var i = 0; i < value.length; i++) {
      if (this.isInteger(value.charAt(i))) {
        // It is a number
        if (i == 0) {
          // It is the molecule amount
          state = State.MoleculeAmount;
          currentval = value.charAt(i);
        } else {
          if (state == State.MoleculeAmount || state == State.AtomAmount) {
            // It is still part of the old amount
            currentval += value.charAt(i);
          } else {
            // New atom count
            atom.name = currentval;
            currentval = value.charAt(i);
            state = State.AtomAmount;
          }
        }
      } else {
        // It is not a number, probably a letter
        if (i == 0) {
          currentval = "1";
          state = State.MoleculeAmount;
        }
        if (this.charIsLetter(Case.Uppercase, value.charAt(i))) {
          if (state == State.MoleculeAmount) {
            molecule.amount = parseInt(currentval);
          } else if (state == State.AtomAmount) {
            atom.amount = parseInt(currentval);
            if (atom.amount == 0) {
              atom.amount = 1;
            }
            molecule.atoms.push(atom);
            atom = new Atom();
          } else if (state == State.AtomName) {
            atom.name = currentval;
            atom.amount = 1;
            molecule.atoms.push(atom);
            atom = new Atom();
          }
          state = State.AtomName;
          currentval = value.charAt(i);
        } else if (this.charIsLetter(Case.Lowercase, value.charAt(i))) {
          // Lowercase letter detected
          currentval += value.charAt(i);
        }
      }
    }
    if (i == value.length) {
      if (state == State.AtomAmount) {
        atom.amount = parseInt(currentval);
        molecule.atoms.push(atom);
        atom = new Atom();
      } else if (state == State.AtomName) {
        atom.name = currentval;
        if (atom.amount == 0) {
          atom.amount = 1;
        }
        molecule.atoms.push(atom);
        atom = new Atom();
      }
    }
    console.log(JSON.stringify(molecule));
    return molecule;
  }

  getMolecularMass(value: string) {
    let result = 0;
    let molecule = this.seperateMolecule(value);
    for (let i = 0; i < molecule.atoms.length; i++) {
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[j].symbol == molecule.atoms[i].name) {
          result += molecule.atoms[i].amount * this.data[j].molareMasse;
          break;
        }
        if (j == this.data.length - 1) {
          document.querySelector("main").innerHTML +=
            "<br><br>" + "Das Molekül enthält ein unbekanntes Element.";
          return;
        }
      }
    }
    return result;
  }

  calculateMass1() {
    return (
      (this.getMolecularMass(this.substance1) *
        Number(this.amount1) *
        Number(this.mass2)) /
      (this.getMolecularMass(this.substance2) * Number(this.amount2))
    );
  }

  calculateMass2() {
    return (
      (this.getMolecularMass(this.substance2) *
        Number(this.amount2) *
        Number(this.mass1)) /
      (this.getMolecularMass(this.substance1) * Number(this.amount1))
    );
  }

  calculateAmount1() {
    return (
      (this.getMolecularMass(this.substance2) *
        Number(this.mass1) *
        Number(this.amount2)) /
      (this.getMolecularMass(this.substance1) * Number(this.mass2))
    );
  }

  calculateAmount2() {
    return (
      (this.getMolecularMass(this.substance1) *
        Number(this.mass2) *
        Number(this.amount1)) /
      (this.getMolecularMass(this.substance2) * Number(this.mass1))
    );
  }

  error: string = null;
  errortitle: string = null;

  startButtonClick() {
    console.log("Substance1: " + this.substance1);
    console.log("Substance2: " + this.substance2);
    console.log("Mass1: " + this.mass1);
    console.log("Mass2: " + this.mass2);
    console.log("Amount1: " + this.amount1);
    console.log("Amount2: " + this.amount2);
    let emptyField: StochiometrieField = null;
    let errorcode = "none";
    if (this.substance1 == "" || this.substance1 == undefined) {
      emptyField = StochiometrieField.Substance1;
    }
    if (this.substance2 == undefined || this.substance2 == "") {
      if (emptyField == null) {
        emptyField = StochiometrieField.Substance2;
      } else {
        errorcode = "multiple empty fields";
      }
    }
    if (this.mass1 == undefined || this.mass1 == "") {
      if (emptyField == null) {
        emptyField = StochiometrieField.Mass1;
      } else {
        errorcode = "multiple empty fields";
      }
    }
    if (this.mass2 == undefined || this.mass2 == "") {
      if (emptyField == null) {
        emptyField = StochiometrieField.Mass2;
      } else {
        errorcode = "multiple empty fields";
      }
    }
    if (this.amount1 == undefined || this.amount1 == "") {
      if (emptyField == null) {
        emptyField = StochiometrieField.Amount1;
      } else {
        errorcode = "multiple empty fields";
      }
    }
    if (this.amount2 == undefined || this.amount2 == "") {
      if (emptyField == null) {
        emptyField = StochiometrieField.Amount2;
      } else {
        errorcode = "multiple empty fields";
      }
    }
    if (errorcode == "multiple empty fields" || emptyField == null) {
      if (this.language == "de") {
        this.errortitle = "Fehler";
        this.error = "Es muss genau ein leeres Feld geben.";
      } else {
        this.errortitle = "Error";
        this.error = "There must be exactly one empty field.";
      }
      return;
    }
    switch (emptyField) {
      case StochiometrieField.Mass1: {
        this.mass1 = String(Math.round(this.calculateMass1() * 10) / 10);
        break;
      }
      case StochiometrieField.Mass2: {
        this.mass2 = String(Math.round(this.calculateMass2() * 10) / 10);
        break;
      }
      case StochiometrieField.Amount1: {
        this.amount1 = String(Math.round(this.calculateAmount1() * 10) / 10);
        break;
      }
      case StochiometrieField.Amount2: {
        this.amount2 = String(Math.round(this.calculateAmount2() * 10) / 10);
        break;
      }
      default: {
        if (this.language == "de") {
          this.errortitle = "Fehler";
          this.error = "Beide Stoff-Eingabefelder müssen ausgefüllt sein.";
        } else {
          this.errortitle = "Error";
          this.error = "Both substance input fields must be filled out.";
        }
        return;
      }
    }
  }

  removeError() {
    this.error = null;
    this.errortitle = null;
  }
}
