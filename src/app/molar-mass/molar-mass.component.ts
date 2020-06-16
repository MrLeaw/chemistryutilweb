import { Component, OnInit } from "@angular/core";
import { DATA } from "../data";
import { Molecule, Atom, State, Case } from "../types";
import { LANGDATA } from "../langdata";
import { SharedDataService } from "../shared-data.service";

@Component({
  selector: "app-molar-mass",
  templateUrl: "./molar-mass.component.html",
  styleUrls: ["./molar-mass.component.css"],
})
export class MolarMassComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  language: string;
  langData = null;
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
  error: string = null;
  errortitle: string = null;
  output: string = "";
  getMolecularMass(value: string): number {
    let result = 0;
    let molecule = this.seperateMolecule(value);
    for (let i = 0; i < molecule.atoms.length; i++) {
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[j].symbol == molecule.atoms[i].name) {
          result += molecule.atoms[i].amount * this.data[j].molareMasse;
          break;
        }
        if (j == this.data.length - 1) {
          if (this.language == "de") {
            this.error = "Das Molekül enthält ein unbekanntes Element.";
            this.errortitle = "Fehler";
          } else {
            this.errortitle = "Error";
            this.error = "The molecule contains an unknown element.";
          }
          return;
          return -1;
        }
      }
    }
    return result;
  }

  outputMolarMass(value: string) {
    if (value == undefined || value == null || value == "") {
      if (this.language == "de") {
        this.errortitle = "Fehler";
        this.error = "Das Eingabefeld darf nicht leer sein.";
      } else {
        this.errortitle = "Error";
        this.error = "The input field can't be empty.";
      }
      return;
    }
    let res = this.getMolecularMass(value);
    if (res != -1) {
      this.output = Math.round(res * 100) / 100 + " g/mol";
    }
  }

  data = DATA;
  input: string;
  startButtonClick() {
    this.outputMolarMass(this.input);
  }

  removeError() {
    this.error = null;
    this.errortitle = null;
  }
}
