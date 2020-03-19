import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Molecule, Reaction, Atom, Case, State } from "../types";
import { SharedDataService } from "../shared-data.service";
import { LANGDATA } from "../langdata";

@Component({
  selector: "app-formula-balancer",
  templateUrl: "./formula-balancer.component.html",
  styleUrls: ["./formula-balancer.component.css"]
})
export class FormulaBalancerComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.language = this.sharedDataService.getLanguage();
    this.theme = this.sharedDataService.getTheme();
    this.langData = LANGDATA[this.language];
  }
  balancedFormula: Reaction;
  input: string = "";
  startButtonClick(): void {
    this.outputBalancedFormula(this.input);
  }
  langData = null;
  language: string;
  theme: string;
  error: string = null;
  errortitle: string = null;
  reactionsteps: Reaction[] = [];
  reactantselementssteps: Atom[][] = [];
  productselementssteps: Atom[][] = [];
  showDebug = false;
  arr1 = [];
  arr2 = [];

  getSubscriptString(amount: number): string {
    const subscript = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
    let str = String(amount);
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += subscript[Number(str[i])];
    }
    return result;
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
      "z"
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
      "Z"
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

  generateReaction(value: string): Reaction {
    let reactants = value.split("=")[0].split("+");
    let products = value.split("=")[1].split("+");
    let reaction = new Reaction();
    for (var i = 0; i < reactants.length; i++) {
      reaction.reactants.push(this.seperateMolecule(reactants[i]));
    }
    for (var i = 0; i < products.length; i++) {
      reaction.products.push(this.seperateMolecule(products[i]));
    }
    return reaction;
  }

  sortAtomArray(value: Atom[]): Atom[] {
    let swapped: boolean;
    do {
      swapped = false;
      for (let i = 1; i < value.length; i++) {
        if (value[i - 1].name > value[i].name) {
          const m = value[i];
          value[i] = value[i - 1];
          value[i - 1] = m;
          swapped = true;
        }
      }
    } while (swapped);
    return value;
  }

  isBalanced(reactantsElements: Atom[], productsElements: Atom[]): boolean {
    let balanced = true;
    for (let i = 0; i < reactantsElements.length; i++) {
      if (reactantsElements[i].amount != productsElements[i].amount) {
        balanced = false;
      }
    }
    return balanced;
  }

  compare(a, b) {
    return a.priority - b.priority;
  }

  balanceFormula(value: string): Reaction {
    let reaction = this.generateReaction(value);
    let reactantsElements = this.getElementsFromReactionHalf(
      reaction.reactants
    );
    let productsElements = this.getElementsFromReactionHalf(reaction.products);
    if (reactantsElements.length != productsElements.length) {
      this.error = "Auf beiden Seiten müssen die gleichen Atome vorkommen!";
      this.errortitle = "Fehler";
      return;
    }
    reactantsElements = this.sortAtomArray(reactantsElements);
    productsElements = this.sortAtomArray(productsElements);
    let equal = true;
    for (let i = 0; i < reactantsElements.length; i++) {
      if (equal) {
        equal = reactantsElements[i].name == productsElements[i].name;
      } else {
        break;
      }
    }
    if (!equal) {
      this.error = "Auf beiden Seiten müssen die gleichen Atome vorkommen!";
      this.errortitle = "Fehler";
      return;
    }
    let counter = 0;
    while (!this.isBalanced(reactantsElements, productsElements)) {
      counter++;
      if (counter > 24) {
        console.log(reaction);
        this.error = "Ausgleichen hat zu lange gedauert! (mind. 25 Versuche) ";
        this.errortitle = "Fehler";
        return;
      }
      for (let i = 0; i < reactantsElements.length; i++) {
        if (reactantsElements[i].amount < productsElements[i].amount) {
          // increase reactants
          let arr = [];
          for (let j = 0; j < reaction.reactants.length; j++) {
            let contains = false;
            for (let m = 0; m < reaction.reactants[j].atoms.length; m++) {
              if (
                reaction.reactants[j].atoms[m].name == reactantsElements[i].name
              ) {
                contains = true;
              }
            }
            if (contains) {
              arr.push({
                priority: reaction.reactants[j].atoms.length,
                molecule: reaction.reactants[j]
              });
            }
          }
          arr.sort(this.compare);
          this.arr1.push(arr);
          for (let m in arr[0].molecule.atoms) {
            let j: number;
            if (arr[0].molecule.atoms[m].name == reactantsElements[i].name) {
              for (let l = 0; l < reaction.reactants.length; l++) {
                if (reaction.reactants[l].atoms == arr[0].molecule.atoms) {
                  j = l;
                }
              }
              reaction.reactants[j].amount += 1;
              for (let n = 0; n < reaction.reactants[j].atoms.length; n++) {
                for (let s = 0; s < reactantsElements.length; s++) {
                  if (
                    reactantsElements[s].name ==
                    reaction.reactants[j].atoms[n].name
                  ) {
                    reactantsElements[s].amount +=
                      reaction.reactants[j].atoms[n].amount;
                    break;
                  }
                }
              }
            }
          }
        } else if (reactantsElements[i].amount > productsElements[i].amount) {
          // increase products
          let arr = [];
          for (let j = 0; j < reaction.products.length; j++) {
            let contains = false;
            for (let m = 0; m < reaction.products[j].atoms.length; m++) {
              if (
                reaction.products[j].atoms[m].name == productsElements[i].name
              ) {
                contains = true;
              }
            }
            if (contains) {
              arr.push({
                priority: reaction.products[j].atoms.length,
                molecule: reaction.products[j]
              });
            }
          }
          this.arr2.push(arr);
          arr.sort(this.compare);
          for (let m in arr[0].molecule.atoms) {
            let j: number;
            if (arr[0].molecule.atoms[m].name == productsElements[i].name) {
              for (let l = 0; l < reaction.products.length; l++) {
                if (reaction.products[l].atoms == arr[0].molecule.atoms) {
                  j = l;
                }
              }
              reaction.products[j].amount += 1;
              for (let n = 0; n < reaction.products[j].atoms.length; n++) {
                for (let s = 0; s < productsElements.length; s++) {
                  if (
                    productsElements[s].name ==
                    reaction.products[j].atoms[n].name
                  ) {
                    productsElements[s].amount +=
                      reaction.products[j].atoms[n].amount;
                    break;
                  }
                }
              }
            }
          }
        }
        this.reactionsteps.push(JSON.parse(JSON.stringify(reaction)));
        this.reactantselementssteps.push(
          JSON.parse(JSON.stringify(reactantsElements))
        );
        this.productselementssteps.push(
          JSON.parse(JSON.stringify(productsElements))
        );
      }
    }
    return reaction;
  }

  getElementsFromReactionHalf(value: Molecule[]): Atom[] {
    let reactantsElements: Atom[] = [];
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < value[i].atoms.length; j++) {
        let added = false;
        for (let k = 0; k < reactantsElements.length; k++) {
          if (reactantsElements[k].name == value[i].atoms[j].name) {
            reactantsElements[k].amount +=
              value[i].amount * value[i].atoms[j].amount;
            added = true;
          }
        }
        if (!added) {
          let atom = new Atom();
          atom.name = value[i].atoms[j].name;
          atom.amount = value[i].amount * value[i].atoms[j].amount;
          reactantsElements.push(atom);
        }
      }
    }
    return reactantsElements;
  }

  outputBalancedFormula(value: string) {
    if (value == undefined || value == null || value == "") {
      this.errortitle = "Fehler";
      this.error = "Das Eingabefeld darf nicht leer sein.";
      return;
    }
    this.balancedFormula = this.balanceFormula(value);
  }
  removeError() {
    this.error = null;
    this.errortitle = null;
  }
}
