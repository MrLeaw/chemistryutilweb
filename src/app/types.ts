export enum Case {
  Lowercase = 0,
  Uppercase,
}

export enum State {
  MoleculeAmount = 0,
  AtomAmount,
  AtomName,
}

export enum ElementState {
  solid = 0,
  liquid,
  gas,
}

export class Atom {
  amount: number = 1;
  name: string = "";
}

export class Molecule {
  amount: number = 1;
  atoms: Atom[] = [];
}

export class ElementData {
  ordnungszahl: number;
  name: string;
  nameen: string;
  symbol: string;
  molareMasse: number;
  nukleonenAnzahl: number;
  dichte: number;
  schmelzpunkt: number;
  siedepunkt: number;
  elektronegativitaet: number;
  state: ElementState;
}

export class Reaction {
  reactants: Molecule[] = [];
  products: Molecule[] = [];
}

export enum StochiometrieField {
  Substance1 = 0,
  Substance2,
  Mass1,
  Mass2,
  Amount1,
  Amount2,
}
