import { ElementData, ElementState } from "./types";

export const DATA: ElementData[] = [
  {
    ordnungszahl: 1,
    name: "Wasserstoff",
    nameen: "Hydrogen",
    symbol: "H",
    molareMasse: 1.00794,
    nukleonenAnzahl: 1,
    dichte: 0.084,
    schmelzpunkt: -259.14,
    siedepunkt: -252.87,
    elektronegativitaet: 2.2,
    state: null,
  },
  {
    ordnungszahl: 2,
    name: "Helium",
    nameen: "Helium",
    symbol: "He",
    molareMasse: 4.002602,
    nukleonenAnzahl: 4,
    dichte: 0.17,
    schmelzpunkt: -272.1,
    siedepunkt: -268.93,
    elektronegativitaet: null,
    state: null,
  },
  {
    ordnungszahl: 3,
    name: "Lithium",
    nameen: "Lithium",
    symbol: "Li",
    molareMasse: 6.941,
    nukleonenAnzahl: 7,
    dichte: 0.53,
    schmelzpunkt: 180.54,
    siedepunkt: 1347,
    elektronegativitaet: 0.98,
    state: null,
  },
  {
    ordnungszahl: 4,
    name: "Beryllium",
    nameen: "Beryllium",
    symbol: "Be",
    molareMasse: 0.012182,
    nukleonenAnzahl: 9,
    dichte: 1.85,
    schmelzpunkt: 1278,
    siedepunkt: 2970,
    elektronegativitaet: 1.57,
    state: null,
  },
  {
    ordnungszahl: 5,
    name: "Bor",
    nameen: "Boron",
    symbol: "B",
    molareMasse: 10.811,
    nukleonenAnzahl: 11,
    dichte: 2.46,
    schmelzpunkt: 2079,
    siedepunkt: 2550,
    elektronegativitaet: 2.04,
    state: null,
  },
  {
    ordnungszahl: 6,
    name: "Kohlenstoff",
    nameen: "Carbon",
    symbol: "C",
    molareMasse: 12.0107,
    nukleonenAnzahl: 12,
    dichte: 3.15,
    schmelzpunkt: 3550,
    siedepunkt: 4827,
    elektronegativitaet: 2.55,
    state: null,
  },
  {
    ordnungszahl: 7,
    name: "Stickstoff",
    nameen: "Nitrogen",
    symbol: "N",
    molareMasse: 14.0067,
    nukleonenAnzahl: 14,
    dichte: 1.17,
    schmelzpunkt: -209.86,
    siedepunkt: -195.8,
    elektronegativitaet: 3.04,
    state: null,
  },
  {
    ordnungszahl: 8,
    name: "Sauerstoff",
    nameen: "Oxygen",
    symbol: "O",
    molareMasse: 15.9994,
    nukleonenAnzahl: 16,
    dichte: 1.33,
    schmelzpunkt: -218.4,
    siedepunkt: -182.96,
    elektronegativitaet: 3.44,
    state: null,
  },
  {
    ordnungszahl: 9,
    name: "Fluor",
    nameen: "Fluorine",
    symbol: "F",
    molareMasse: 18.9984032,
    nukleonenAnzahl: 19,
    dichte: 1.58,
    schmelzpunkt: -219.62,
    siedepunkt: -188.14,
    elektronegativitaet: 3.98,
    state: null,
  },
  {
    ordnungszahl: 10,
    name: "Neon",
    nameen: "Neon",
    symbol: "Ne",
    molareMasse: 20.1797,
    nukleonenAnzahl: 20,
    dichte: 0.84,
    schmelzpunkt: -248.67,
    siedepunkt: -246.05,
    elektronegativitaet: null,
    state: null,
  },
  {
    ordnungszahl: 11,
    name: "Natrium",
    nameen: "Sodium",
    symbol: "Na",
    molareMasse: 22.98,
    nukleonenAnzahl: 23,
    dichte: 0.97,
    schmelzpunkt: 97.81,
    siedepunkt: 882.9,
    elektronegativitaet: 0.93,
    state: null,
  },
  {
    ordnungszahl: 12,
    name: "Magnesium",
    nameen: "Magnesium",
    symbol: "Mg",
    molareMasse: 24.305,
    nukleonenAnzahl: 24,
    dichte: 1.74,
    schmelzpunkt: 648.8,
    siedepunkt: 1090,
    elektronegativitaet: 1.31,
    state: null,
  },
  {
    ordnungszahl: 13,
    name: "Aluminium",
    nameen: "Aluminium",
    symbol: "Al",
    molareMasse: 26.9815386,
    nukleonenAnzahl: 27,
    dichte: 2.7,
    schmelzpunkt: 660.37,
    siedepunkt: 2467,
    elektronegativitaet: 1.61,
    state: null,
  },
  {
    ordnungszahl: 14,
    name: "Silicium",
    nameen: "Silicon",
    symbol: "Si",
    molareMasse: 28.0855,
    nukleonenAnzahl: 28,
    dichte: 2.33,
    schmelzpunkt: 1410,
    siedepunkt: 2355,
    elektronegativitaet: 1.9,
    state: null,
  },
  {
    ordnungszahl: 15,
    name: "Phosphor",
    nameen: "Phosphorus",
    symbol: "P",
    molareMasse: 30.973762,
    nukleonenAnzahl: 31,
    dichte: 1.82,
    schmelzpunkt: 44.1,
    siedepunkt: 280,
    elektronegativitaet: 2.19,
    state: null,
  },
  {
    ordnungszahl: 16,
    name: "Schwefel",
    nameen: "Sulfur",
    symbol: "S",
    molareMasse: 32.065,
    nukleonenAnzahl: 32,
    dichte: 2.06,
    schmelzpunkt: 112.8,
    siedepunkt: 444.67,
    elektronegativitaet: 2.58,
    state: null,
  },
  {
    ordnungszahl: 17,
    name: "Chlor",
    nameen: "Chlorine",
    symbol: "Cl",
    molareMasse: 35.453,
    nukleonenAnzahl: 35,
    dichte: 2.95,
    schmelzpunkt: -100.98,
    siedepunkt: -34.6,
    elektronegativitaet: 3.16,
    state: null,
  },
  {
    ordnungszahl: 18,
    name: "Argon",
    nameen: "Argon",
    symbol: "Ar",
    molareMasse: 39.948,
    nukleonenAnzahl: 40,
    dichte: 1.66,
    schmelzpunkt: -189.2,
    siedepunkt: -185.7,
    elektronegativitaet: null,
    state: null,
  },
  {
    ordnungszahl: 19,
    name: "Kalium",
    nameen: "Potassium",
    symbol: "K",
    molareMasse: 39.0983,
    nukleonenAnzahl: 39,
    dichte: 0.86,
    schmelzpunkt: 63.65,
    siedepunkt: 774,
    elektronegativitaet: 0.82,
    state: null,
  },
  {
    ordnungszahl: 20,
    name: "Calcium",
    nameen: "Calcium",
    symbol: "Ca",
    molareMasse: 40.078,
    nukleonenAnzahl: 40,
    dichte: 1.54,
    schmelzpunkt: 839,
    siedepunkt: 1484,
    elektronegativitaet: 1,
    state: null,
  },
  {
    ordnungszahl: 21,
    name: "Scandium",
    nameen: "Scandium",
    symbol: "Sc",
    molareMasse: 44.955912,
    nukleonenAnzahl: 45,
    dichte: 2.99,
    schmelzpunkt: 1541,
    siedepunkt: 2831,
    elektronegativitaet: 1.36,
    state: null,
  },
  {
    ordnungszahl: 22,
    name: "Titan",
    nameen: "Titanium",
    symbol: "Ti",
    molareMasse: 47.867,
    nukleonenAnzahl: 48,
    dichte: 4.51,
    schmelzpunkt: 1660,
    siedepunkt: 3287,
    elektronegativitaet: 1.54,
    state: null,
  },
  {
    ordnungszahl: 23,
    name: "Vanadium",
    nameen: "Vanadium",
    symbol: "V",
    molareMasse: 50.9415,
    nukleonenAnzahl: 51,
    dichte: 6.09,
    schmelzpunkt: 1890,
    siedepunkt: 3380,
    elektronegativitaet: 1.63,
    state: null,
  },
  {
    ordnungszahl: 24,
    name: "Chrom",
    nameen: "Chromium",
    symbol: "Cr",
    molareMasse: 51.9961,
    nukleonenAnzahl: 52,
    dichte: 7.14,
    schmelzpunkt: 1857,
    siedepunkt: 2672,
    elektronegativitaet: 1.66,
    state: null,
  },
  {
    ordnungszahl: 25,
    name: "Mangan",
    nameen: "Manganese",
    symbol: "Mn",
    molareMasse: 54.938045,
    nukleonenAnzahl: 55,
    dichte: 7.44,
    schmelzpunkt: 1244,
    siedepunkt: 1962,
    elektronegativitaet: 1.55,
    state: null,
  },
  {
    ordnungszahl: 26,
    name: "Eisen",
    nameen: "Iron",
    symbol: "Fe",
    molareMasse: 55.845,
    nukleonenAnzahl: 56,
    dichte: 7.87,
    schmelzpunkt: 1535,
    siedepunkt: 2750,
    elektronegativitaet: 1.83,
    state: null,
  },
  {
    ordnungszahl: 27,
    name: "Cobalt",
    nameen: "Cobalt",
    symbol: "Co",
    molareMasse: 58.933195,
    nukleonenAnzahl: 59,
    dichte: 8.89,
    schmelzpunkt: 1495,
    siedepunkt: 2870,
    elektronegativitaet: 1.88,
    state: null,
  },
  {
    ordnungszahl: 28,
    name: "Nickel",
    nameen: "Nickel",
    symbol: "Ni",
    molareMasse: 58.6934,
    nukleonenAnzahl: 58,
    dichte: 8.91,
    schmelzpunkt: 1453,
    siedepunkt: 2732,
    elektronegativitaet: 1.91,
    state: null,
  },
  {
    ordnungszahl: 29,
    name: "Kupfer",
    nameen: "Copper",
    symbol: "Cu",
    molareMasse: 63.546,
    nukleonenAnzahl: 63,
    dichte: 8.92,
    schmelzpunkt: 1083,
    siedepunkt: 2567,
    elektronegativitaet: 1.9,
    state: null,
  },
  {
    ordnungszahl: 30,
    name: "Zink",
    nameen: "Zinc",
    symbol: "Zn",
    molareMasse: 65.409,
    nukleonenAnzahl: 64,
    dichte: 7.14,
    schmelzpunkt: 419.6,
    siedepunkt: 907,
    elektronegativitaet: 1.65,
    state: null,
  },
  {
    ordnungszahl: 31,
    name: "Gallium",
    nameen: "Gallium",
    symbol: "Ga",
    molareMasse: 69.723,
    nukleonenAnzahl: 69,
    dichte: 5.91,
    schmelzpunkt: 29.78,
    siedepunkt: 2403,
    elektronegativitaet: 1.81,
    state: null,
  },
  {
    ordnungszahl: 32,
    name: "Germanium",
    nameen: "Germanium",
    symbol: "Ge",
    molareMasse: 72.64,
    nukleonenAnzahl: 74,
    dichte: 5.32,
    schmelzpunkt: 937.4,
    siedepunkt: 2830,
    elektronegativitaet: 2.01,
    state: null,
  },
  {
    ordnungszahl: 33,
    name: "Arsen",
    nameen: "Arsenic",
    symbol: "As",
    molareMasse: 74.9216,
    nukleonenAnzahl: 75,
    dichte: 5.72,
    schmelzpunkt: 615,
    siedepunkt: 615,
    elektronegativitaet: 2.18,
    state: null,
  },
  {
    ordnungszahl: 34,
    name: "Selen",
    nameen: "Selenium",
    symbol: "Se",
    molareMasse: 78.96,
    nukleonenAnzahl: 79,
    dichte: 4.82,
    schmelzpunkt: 217,
    siedepunkt: 684.9,
    elektronegativitaet: 2.55,
    state: null,
  },
  {
    ordnungszahl: 35,
    name: "Brom",
    nameen: "Bromine",
    symbol: "Br",
    molareMasse: 79.904,
    nukleonenAnzahl: 80,
    dichte: 3140,
    schmelzpunkt: -7.2,
    siedepunkt: 58.78,
    elektronegativitaet: 2.96,
    state: null,
  },
  {
    ordnungszahl: 36,
    name: "Krypton",
    nameen: "Krypton",
    symbol: "Kr",
    molareMasse: 83.798,
    nukleonenAnzahl: 84,
    dichte: 3.48,
    schmelzpunkt: -156.6,
    siedepunkt: -152.3,
    elektronegativitaet: 3.0,
    state: null,
  },
  {
    ordnungszahl: 37,
    name: "Rubidium",
    nameen: "Rubidium",
    symbol: "Rb",
    molareMasse: 85.4678,
    nukleonenAnzahl: 85,
    dichte: 1.53,
    schmelzpunkt: 38.89,
    siedepunkt: 688,
    elektronegativitaet: 0.82,
    state: null,
  },
  {
    ordnungszahl: 38,
    name: "Strontium",
    symbol: "Sr",
    nameen: "Strontium",
    molareMasse: 87.62,
    nukleonenAnzahl: 88,
    dichte: 2.63,
    schmelzpunkt: 769,
    siedepunkt: 1384,
    elektronegativitaet: 0.95,
    state: null,
  },
  {
    ordnungszahl: 39,
    name: "Yttrium",
    nameen: "Yttrium",
    symbol: "Y",
    molareMasse: 88.90585,
    nukleonenAnzahl: 89,
    dichte: 4.47,
    schmelzpunkt: 1522,
    siedepunkt: 3338,
    elektronegativitaet: 1.22,
    state: null,
  },
  {
    ordnungszahl: 40,
    name: "Zirconium",
    nameen: "Zirconium",
    symbol: "Zr",
    molareMasse: 91.224,
    nukleonenAnzahl: 90,
    dichte: 6.51,
    schmelzpunkt: 1852,
    siedepunkt: 4377,
    elektronegativitaet: 1.33,
    state: null,
  },
  {
    ordnungszahl: 41,
    name: "Niob",
    nameen: "Niobium",
    symbol: "Nb",
    molareMasse: 92.90638,
    nukleonenAnzahl: 93,
    dichte: 8.58,
    schmelzpunkt: 2468,
    siedepunkt: 4742,
    elektronegativitaet: 1.6,
    state: null,
  },
  {
    ordnungszahl: 42,
    name: "Molybdän",
    nameen: "Molybdenum",
    symbol: "Mo",
    molareMasse: 95.94,
    nukleonenAnzahl: 98,
    dichte: 10.28,
    schmelzpunkt: 2617,
    siedepunkt: 4612,
    elektronegativitaet: 2.16,
    state: null,
  },
  {
    ordnungszahl: 43,
    name: "Technetium",
    nameen: "Technetium",
    symbol: "Tc",
    molareMasse: 95.94,
    nukleonenAnzahl: 98,
    dichte: 11.49,
    schmelzpunkt: 2172,
    siedepunkt: 4877,
    elektronegativitaet: 2.1,
    state: null,
  },
  {
    ordnungszahl: 44,
    name: "Ruthenium",
    nameen: "Ruthenium",
    symbol: "Ru",
    molareMasse: 101.07,
    nukleonenAnzahl: 102,
    dichte: 12.45,
    schmelzpunkt: 2310,
    siedepunkt: 3900,
    elektronegativitaet: 2.2,
    state: null,
  },
  {
    ordnungszahl: 45,
    name: "Rhodium",
    nameen: "Rhodium",
    symbol: "Rh",
    molareMasse: 102.9055,
    nukleonenAnzahl: 103,
    dichte: 12.41,
    schmelzpunkt: 1966,
    siedepunkt: 3727,
    elektronegativitaet: 2.28,
    state: null,
  },
  {
    ordnungszahl: 46,
    name: "Palladium",
    nameen: "Palladium",
    symbol: "Pd",
    molareMasse: 106.42,
    nukleonenAnzahl: 106,
    dichte: 12.02,
    schmelzpunkt: 1552,
    siedepunkt: 3140,
    elektronegativitaet: 2.2,
    state: null,
  },
  {
    ordnungszahl: 47,
    name: "Silber",
    nameen: "Silver",
    symbol: "Ag",
    molareMasse: 107.8682,
    nukleonenAnzahl: 107,
    dichte: 10.49,
    schmelzpunkt: 961.9,
    siedepunkt: 2212,
    elektronegativitaet: 1.93,
    state: null,
  },
  {
    ordnungszahl: 48,
    name: "Cadmium",
    nameen: "Cadmium",
    symbol: "Cd",
    molareMasse: 112.411,
    nukleonenAnzahl: 114,
    dichte: 8.64,
    schmelzpunkt: 320.9,
    siedepunkt: 765,
    elektronegativitaet: 1.69,
    state: null,
  },
  {
    ordnungszahl: 49,
    name: "Indium",
    symbol: "In",
    nameen: "Indium",
    molareMasse: 114.818,
    nukleonenAnzahl: 115,
    dichte: 7.31,
    schmelzpunkt: 156.2,
    siedepunkt: 2080,
    elektronegativitaet: 1.78,
    state: null,
  },
  {
    ordnungszahl: 50,
    name: "Zinn",
    nameen: "Tin",
    symbol: "Sn",
    molareMasse: 118.71,
    nukleonenAnzahl: 120,
    dichte: 7.29,
    schmelzpunkt: 232,
    siedepunkt: 2270,
    elektronegativitaet: 1.96,
    state: null,
  },
  {
    ordnungszahl: 51,
    name: "Antimon",
    nameen: "Antimony",
    symbol: "Sb",
    molareMasse: 121.76,
    nukleonenAnzahl: 121,
    dichte: 6.69,
    schmelzpunkt: 630.7,
    siedepunkt: 1750,
    elektronegativitaet: 2.05,
    state: null,
  },
  {
    ordnungszahl: 52,
    name: "Tellur",
    nameen: "Tellurium",
    symbol: "Te",
    molareMasse: 127.6,
    nukleonenAnzahl: 130,
    dichte: 6.25,
    schmelzpunkt: 449.5,
    siedepunkt: 990,
    elektronegativitaet: 2.1,
    state: null,
  },
  {
    ordnungszahl: 53,
    name: "Iod",
    nameen: "Iodine",
    symbol: "I",
    molareMasse: 126.90447,
    nukleonenAnzahl: 127,
    dichte: 4.94,
    schmelzpunkt: 113.5,
    siedepunkt: 184.4,
    elektronegativitaet: 2.66,
    state: null,
  },
  {
    ordnungszahl: 54,
    name: "Xenon",
    nameen: "Xenon",
    symbol: "Xe",
    molareMasse: 131.293,
    nukleonenAnzahl: 132,
    dichte: 4.49,
    schmelzpunkt: -111.9,
    siedepunkt: -107.1,
    elektronegativitaet: 2.6,
    state: null,
  },
  {
    ordnungszahl: 55,
    nameen: "Caesium",
    name: "Caesium",
    symbol: "Cs",
    molareMasse: 132.9054519,
    nukleonenAnzahl: 113,
    dichte: 1.9,
    schmelzpunkt: 28.4,
    siedepunkt: 678.4,
    elektronegativitaet: 0.79,
    state: null,
  },
  {
    ordnungszahl: 56,
    name: "Barium",
    symbol: "Ba",
    nameen: "Barium",
    molareMasse: 137.327,
    nukleonenAnzahl: 138,
    dichte: 3.65,
    schmelzpunkt: 725,
    siedepunkt: 1640,
    elektronegativitaet: 0.89,
    state: null,
  },
  {
    ordnungszahl: 57,
    name: "Lanthan",
    nameen: "Lanthanum",
    symbol: "La",
    molareMasse: 138.90547,
    nukleonenAnzahl: 139,
    dichte: 6.61,
    schmelzpunkt: 921,
    siedepunkt: 3457,
    elektronegativitaet: 1.1,
    state: null,
  },
  {
    ordnungszahl: 58,
    name: "Cer",
    nameen: "Cerium",
    symbol: "Ce",
    molareMasse: 149.166,
    nukleonenAnzahl: 140,
    dichte: 6.77,
    schmelzpunkt: 799,
    siedepunkt: 3426,
    elektronegativitaet: 1.12,
    state: null,
  },
  {
    ordnungszahl: 59,
    name: "Praseodym",
    nameen: "Praseodymium",
    symbol: "Pr",
    molareMasse: 140.90765,
    nukleonenAnzahl: 141,
    dichte: 6.48,
    schmelzpunkt: 931,
    siedepunkt: 3512,
    elektronegativitaet: 1.13,
    state: null,
  },
  {
    ordnungszahl: 60,
    name: "Neodym",
    nameen: "Neodymium",
    symbol: "Nd",
    molareMasse: 144.242,
    nukleonenAnzahl: 144,
    dichte: 7,
    schmelzpunkt: 1021,
    siedepunkt: 3068,
    elektronegativitaet: 1.14,
    state: null,
  },
  {
    ordnungszahl: 61,
    name: "Promethium",
    nameen: "Promethium",
    symbol: "Pm",
    molareMasse: 144.912744,
    nukleonenAnzahl: 147,
    dichte: 7.22,
    schmelzpunkt: 1168,
    siedepunkt: 2460,
    elektronegativitaet: 1.07,
    state: null,
  },
  {
    ordnungszahl: 62,
    name: "Samarium",
    nameen: "Samarium",
    symbol: "Sm",
    molareMasse: 150.36,
    nukleonenAnzahl: 152,
    dichte: 7.54,
    schmelzpunkt: 1077,
    siedepunkt: 1791,
    elektronegativitaet: 1.17,
    state: null,
  },
  {
    ordnungszahl: 63,
    name: "Europium",
    nameen: "Europium",
    symbol: "Eu",
    molareMasse: 151.964,
    nukleonenAnzahl: 153,
    dichte: 5.25,
    schmelzpunkt: 822,
    siedepunkt: 1597,
    elektronegativitaet: 1.2,
    state: null,
  },
  {
    ordnungszahl: 64,
    name: "Gadolinium",
    nameen: "Gadolinium",
    symbol: "Gd",
    molareMasse: 157.25,
    nukleonenAnzahl: 158,
    dichte: 7.89,
    schmelzpunkt: 1313,
    siedepunkt: 3266,
    elektronegativitaet: 1.2,
    state: null,
  },
  {
    ordnungszahl: 65,
    name: "Terbium",
    nameen: "Terbium",
    symbol: "Tb",
    molareMasse: 158.92535,
    nukleonenAnzahl: 159,
    dichte: 8.25,
    schmelzpunkt: 1356,
    siedepunkt: 3123,
    elektronegativitaet: 1.1,
    state: null,
  },
  {
    ordnungszahl: 66,
    name: "Dysprosium",
    symbol: "Dy",
    nameen: "Dysprosium",
    molareMasse: 162.5,
    nukleonenAnzahl: 164,
    dichte: 8.56,
    schmelzpunkt: 1412,
    siedepunkt: 2562,
    elektronegativitaet: 1.22,
    state: null,
  },
  {
    ordnungszahl: 67,
    name: "Holmium",
    nameen: "Holmium",
    symbol: "Ho",
    molareMasse: 164.93032,
    nukleonenAnzahl: 165,
    dichte: 8.78,
    schmelzpunkt: 1474,
    siedepunkt: 2695,
    elektronegativitaet: 1.23,
    state: null,
  },
  {
    ordnungszahl: 68,
    name: "Erbium",
    nameen: "Erbium",
    symbol: "Er",
    molareMasse: 167.259,
    nukleonenAnzahl: 166,
    dichte: 9.05,
    schmelzpunkt: 1497,
    siedepunkt: 2900,
    elektronegativitaet: 1.24,
    state: null,
  },
  {
    ordnungszahl: 69,
    name: "Thulium",
    symbol: "Tm",
    nameen: "Thulium",
    molareMasse: 168.93421,
    nukleonenAnzahl: 169,
    dichte: 9.32,
    schmelzpunkt: 1545,
    siedepunkt: 1947,
    elektronegativitaet: 1.25,
    state: null,
  },
  {
    ordnungszahl: 70,
    name: "Ytterbium",
    nameen: "Ytterbium",
    symbol: "Yb",
    molareMasse: 173.04,
    nukleonenAnzahl: 174,
    dichte: 6.97,
    schmelzpunkt: 819,
    siedepunkt: 1194,
    elektronegativitaet: 1.1,
    state: null,
  },
  {
    ordnungszahl: 71,
    name: "Lutetium",
    nameen: "Lutetium",
    symbol: "Lu",
    molareMasse: 174.967,
    nukleonenAnzahl: 175,
    dichte: 9.84,
    schmelzpunkt: 1663,
    siedepunkt: 3395,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 72,
    name: "Hafnium",
    nameen: "Hafnium",
    symbol: "Hf",
    molareMasse: 178.49,
    nukleonenAnzahl: 180,
    dichte: 13.31,
    schmelzpunkt: 2227,
    siedepunkt: 4602,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 73,
    name: "Tantal",
    nameen: "Tantalium",
    symbol: "Ta",
    molareMasse: 180.94788,
    nukleonenAnzahl: 181,
    dichte: 16.68,
    schmelzpunkt: 2996,
    siedepunkt: 5425,
    elektronegativitaet: 1.5,
    state: null,
  },
  {
    ordnungszahl: 74,
    name: "Wolfram",
    nameen: "Tungsten",
    symbol: "W",
    molareMasse: 183.84,
    nukleonenAnzahl: 184,
    dichte: 19.26,
    schmelzpunkt: 3410,
    siedepunkt: 5660,
    elektronegativitaet: 2.4,
    state: null,
  },
  {
    ordnungszahl: 75,
    name: "Rhenium",
    nameen: "Rhenium",
    symbol: "Re",
    molareMasse: 186.207,
    nukleonenAnzahl: 187,
    dichte: 21.03,
    schmelzpunkt: 3180,
    siedepunkt: 5627,
    elektronegativitaet: 1.9,
    state: null,
  },
  {
    ordnungszahl: 76,
    name: "Osmium",
    nameen: "Osmium",
    symbol: "Os",
    molareMasse: 190.23,
    nukleonenAnzahl: 192,
    dichte: 22.61,
    schmelzpunkt: 3045,
    siedepunkt: 5027,
    elektronegativitaet: 2.2,
    state: null,
  },
  {
    ordnungszahl: 77,
    name: "Iridium",
    nameen: "Iridium",
    symbol: "Ir",
    molareMasse: 192.217,
    nukleonenAnzahl: 193,
    dichte: 22.56,
    schmelzpunkt: 2410,
    siedepunkt: 4130,
    elektronegativitaet: 2.2,
    state: null,
  },
  {
    ordnungszahl: 78,
    name: "Platin",
    nameen: "Platinum",
    symbol: "Pt",
    molareMasse: 195.078,
    nukleonenAnzahl: 195,
    dichte: 21.45,
    schmelzpunkt: 1772,
    siedepunkt: 3827,
    elektronegativitaet: 2.3,
    state: null,
  },
  {
    ordnungszahl: 79,
    name: "Gold",
    nameen: "Gold",
    symbol: "Au",
    molareMasse: 196.966569,
    nukleonenAnzahl: 197,
    dichte: 19.32,
    schmelzpunkt: 1064,
    siedepunkt: 2807,
    elektronegativitaet: 2.5,
    state: null,
  },
  {
    ordnungszahl: 80,
    name: "Quecksilber",
    nameen: "Mercury",
    symbol: "Hg",
    molareMasse: 200.59,
    nukleonenAnzahl: 202,
    dichte: 13.55,
    schmelzpunkt: -38.84,
    siedepunkt: 356.6,
    elektronegativitaet: 2.0,
    state: null,
  },
  {
    ordnungszahl: 81,
    name: "Thallium",
    nameen: "Thallium",
    symbol: "Tl",
    molareMasse: 204.3833,
    nukleonenAnzahl: 205,
    dichte: 11.85,
    schmelzpunkt: 303.5,
    siedepunkt: 1457,
    elektronegativitaet: 1.6,
    state: null,
  },
  {
    ordnungszahl: 82,
    name: "Blei",
    nameen: "Lead",
    symbol: "Pb",
    molareMasse: 207.2,
    nukleonenAnzahl: 208,
    dichte: 11.34,
    schmelzpunkt: 327.5,
    siedepunkt: 1740,
    elektronegativitaet: 2.3,
    state: null,
  },
  {
    ordnungszahl: 83,
    name: "Bismut",
    nameen: "Bismuth",
    symbol: "Bi",
    molareMasse: 208.9804,
    nukleonenAnzahl: 209,
    dichte: 9.8,
    schmelzpunkt: 271.3,
    siedepunkt: 1560,
    elektronegativitaet: 2.0,
    state: null,
  },
  {
    ordnungszahl: 84,
    name: "Polonium",
    nameen: "Polonium",
    symbol: "Po",
    molareMasse: 208.982416,
    nukleonenAnzahl: 209,
    dichte: 9.2,
    schmelzpunkt: 254,
    siedepunkt: 962,
    elektronegativitaet: 2.0,
    state: null,
  },
  {
    ordnungszahl: 85,
    name: "Astat",
    nameen: "Astatine",
    symbol: "At",
    molareMasse: 209.987131,
    nukleonenAnzahl: 210,
    dichte: 8.75,
    schmelzpunkt: 302,
    siedepunkt: 337,
    elektronegativitaet: 2.2,
    state: null,
  },
  {
    ordnungszahl: 86,
    name: "Radon",
    nameen: "Radon",
    symbol: "Rn",
    molareMasse: 222.0175705,
    nukleonenAnzahl: 222,
    dichte: 9.23,
    schmelzpunkt: -71,
    siedepunkt: -61.8,
    elektronegativitaet: 2.2,
    state: null,
  },
  {
    ordnungszahl: 87,
    name: "Francium",
    nameen: "Francium",
    symbol: "Fr",
    molareMasse: 223.0197307,
    nukleonenAnzahl: 223,
    dichte: 1.87,
    schmelzpunkt: 27,
    siedepunkt: 677,
    elektronegativitaet: 0.7,
    state: null,
  },
  {
    ordnungszahl: 88,
    name: "Radium",
    nameen: "Radium",
    symbol: "Ra",
    molareMasse: 226.0254026,
    nukleonenAnzahl: 226,
    dichte: 5.5,
    schmelzpunkt: 700,
    siedepunkt: 1140,
    elektronegativitaet: 0.9,
    state: null,
  },
  {
    ordnungszahl: 89,
    name: "Actinium",
    nameen: "Actinium",
    symbol: "Ac",
    molareMasse: 227.027747,
    nukleonenAnzahl: 227,
    dichte: 10.07,
    schmelzpunkt: 1050,
    siedepunkt: 3200,
    elektronegativitaet: 1.1,
    state: null,
  },
  {
    ordnungszahl: 90,
    name: "Thorium",
    nameen: "Thorium",
    symbol: "Th",
    molareMasse: 232.03806,
    nukleonenAnzahl: 232,
    dichte: 11.72,
    schmelzpunkt: 1750,
    siedepunkt: 4790,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 91,
    name: "Protactinium",
    nameen: "Protactinium",
    symbol: "Pr",
    molareMasse: 231.03588,
    nukleonenAnzahl: 231,
    dichte: 15.37,
    schmelzpunkt: 1600,
    siedepunkt: 4027,
    elektronegativitaet: 1.1,
    state: null,
  },
  {
    ordnungszahl: 92,
    name: "Uran",
    nameen: "Uranium",
    symbol: "U",
    molareMasse: 238.02891,
    nukleonenAnzahl: 238,
    dichte: 18.97,
    schmelzpunkt: 1132,
    siedepunkt: 3818,
    elektronegativitaet: 1.4,
    state: null,
  },
  {
    ordnungszahl: 93,
    name: "Neptunium",
    nameen: "Neptunium",
    symbol: "Np",
    molareMasse: 237.0481673,
    nukleonenAnzahl: 237,
    dichte: 20.48,
    schmelzpunkt: 640,
    siedepunkt: 3902,
    elektronegativitaet: 1.4,
    state: null,
  },
  {
    ordnungszahl: 94,
    name: "Plutonium",
    nameen: "Plutonium",
    symbol: "Pu",
    molareMasse: 244.064198,
    nukleonenAnzahl: 244,
    dichte: 19.74,
    schmelzpunkt: 641,
    siedepunkt: 3332,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 95,
    name: "Americium",
    nameen: "Americium",
    symbol: "Am",
    molareMasse: 243.0613727,
    nukleonenAnzahl: 243,
    dichte: 13.67,
    schmelzpunkt: 994,
    siedepunkt: 2607,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 96,
    name: "Curium",
    nameen: "Curium",
    symbol: "Cm",
    molareMasse: 247.070347,
    nukleonenAnzahl: 247,
    dichte: 13.51,
    schmelzpunkt: 1340,
    siedepunkt: 3100,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 97,
    name: "Berkelium",
    nameen: "Berkelium",
    symbol: "Bk",
    molareMasse: 247.070299,
    nukleonenAnzahl: 247,
    dichte: 13.25,
    schmelzpunkt: 986,
    siedepunkt: 2627,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 98,
    name: "Californium",
    nameen: "Californium",
    symbol: "Cf",
    molareMasse: 251.07958,
    nukleonenAnzahl: 251,
    dichte: 15.1,
    schmelzpunkt: 900,
    siedepunkt: 1470,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 99,
    name: "Einsteinium",
    nameen: "Einsteinium",
    symbol: "Es",
    molareMasse: 252.08297,
    nukleonenAnzahl: 252,
    dichte: 8.84,
    schmelzpunkt: 860,
    siedepunkt: 996,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 100,
    name: "Fermium",
    nameen: "Fermium",
    symbol: "Fm",
    molareMasse: 257.095099,
    nukleonenAnzahl: 257,
    dichte: 9.7,
    schmelzpunkt: 1527,
    siedepunkt: 1527,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 101,
    name: "Mendelevium",
    nameen: "Mendelevium",
    symbol: "Md",
    molareMasse: 258.098425,
    nukleonenAnzahl: 258,
    dichte: 10.3,
    schmelzpunkt: 827,
    siedepunkt: 827,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 102,
    name: "Nobelium",
    nameen: "Nobelium",
    symbol: "No",
    molareMasse: 259.10102,
    nukleonenAnzahl: 259,
    dichte: 9.9,
    schmelzpunkt: 827,
    siedepunkt: 827,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 103,
    name: "Lawrencium",
    nameen: "Lawrencium",
    symbol: "Lr",
    molareMasse: 262.10969,
    nukleonenAnzahl: 262,
    dichte: 16.6,
    schmelzpunkt: 1627,
    siedepunkt: 1627,
    elektronegativitaet: 1.3,
    state: null,
  },
  {
    ordnungszahl: 104,
    name: "Rutherfordium",
    nameen: "Rutherfordium",
    symbol: "Rf",
    molareMasse: 261.10875,
    nukleonenAnzahl: 263,
    dichte: 23.2,
    schmelzpunkt: 2100,
    siedepunkt: 5500,
    elektronegativitaet: null,
    state: null,
  },
  {
    ordnungszahl: 105,
    name: "Dubnium",
    nameen: "Dubnium",
    symbol: "Db",
    molareMasse: 262.11415,
    nukleonenAnzahl: 262,
    dichte: 29.3,
    state: ElementState.solid,
    elektronegativitaet: null,
    schmelzpunkt: null,
    siedepunkt: null,
  },
  {
    ordnungszahl: 106,
    name: "Seaborgium",
    nameen: "Seaborgium",
    symbol: "Sg",
    molareMasse: 266.12193,
    nukleonenAnzahl: 266,
    dichte: 35,
    state: ElementState.solid,
    elektronegativitaet: null,
    schmelzpunkt: null,
    siedepunkt: null,
  },
  {
    ordnungszahl: 107,
    name: "Bohrium",
    nameen: "Bohrium",
    symbol: "Bh",
    molareMasse: 264.12473,
    nukleonenAnzahl: 264,
    dichte: 37.1,
    state: ElementState.solid,
    elektronegativitaet: null,
    schmelzpunkt: null,
    siedepunkt: null,
  },
  {
    ordnungszahl: 108,
    name: "Hassium",
    nameen: "Hassium",
    symbol: "Hs",
    molareMasse: 269.1,
    nukleonenAnzahl: 269,
    dichte: 41,
    state: ElementState.solid,
    elektronegativitaet: null,
    schmelzpunkt: null,
    siedepunkt: null,
  },
  {
    ordnungszahl: 109,
    name: "Meitnerium",
    nameen: "Meitnerium",
    symbol: "Mt",
    molareMasse: 268.13882,
    nukleonenAnzahl: 268,
    dichte: 37.4,
    state: ElementState.solid,
    elektronegativitaet: null,
    schmelzpunkt: null,
    siedepunkt: null,
  },
  {
    ordnungszahl: 110,
    name: "Darmstadtium",
    nameen: "Darmstadtium",
    symbol: "Ds",
    molareMasse: 272.1,
    nukleonenAnzahl: 272,
    dichte: 34.8,
    state: ElementState.solid,
    elektronegativitaet: null,
    schmelzpunkt: null,
    siedepunkt: null,
  },
  {
    ordnungszahl: 111,
    name: "Roentgenium",
    nameen: "Roentgenium",
    symbol: "Rg",
    molareMasse: 272.1,
    nukleonenAnzahl: 272,
    dichte: 28.7,
    state: ElementState.solid,
    elektronegativitaet: null,
    schmelzpunkt: null,
    siedepunkt: null,
  },
  {
    ordnungszahl: 112,
    name: "Copernicium",
    nameen: "Copernicium",
    symbol: "Cn",
    molareMasse: 277,
    nukleonenAnzahl: 285,
    dichte: 14,
    state: ElementState.solid,
    elektronegativitaet: null,
    schmelzpunkt: null,
    siedepunkt: null,
  },
  {
    ordnungszahl: 113,
    name: "Nihonium",
    nameen: "Nihonium",
    symbol: "Nh",
    molareMasse: 284.1,
    nukleonenAnzahl: 284,
    dichte: 16,
    schmelzpunkt: 430,
    siedepunkt: 1130,
    elektronegativitaet: null,
    state: null,
  },
  {
    ordnungszahl: 114,
    name: "Flerovium",
    nameen: "Flerovium",
    symbol: "Fl",
    molareMasse: 289,
    nukleonenAnzahl: 289,
    dichte: 14,
    state: ElementState.solid,
    elektronegativitaet: null,
    schmelzpunkt: null,
    siedepunkt: null,
  },
  {
    ordnungszahl: 115,
    name: "Moscovium",
    nameen: "Moscovium",
    symbol: "Mc",
    molareMasse: 288,
    nukleonenAnzahl: 288,
    dichte: 13.5,
    schmelzpunkt: 400,
    siedepunkt: 1100,
    elektronegativitaet: null,
    state: null,
  },
  {
    ordnungszahl: 116,
    name: "Livermorium",
    nameen: "Livermorium",
    symbol: "Lv",
    molareMasse: 292,
    nukleonenAnzahl: 292,
    dichte: 12.9,
    schmelzpunkt: 507,
    siedepunkt: 862,
    elektronegativitaet: null,
    state: null,
  },
  {
    ordnungszahl: 117,
    name: "Tennessin",
    nameen: "Tennessine",
    symbol: "Ts",
    molareMasse: 292,
    nukleonenAnzahl: 292,
    dichte: 7.3,
    schmelzpunkt: 550,
    siedepunkt: 610,
    elektronegativitaet: null,
    state: null,
  },
  {
    ordnungszahl: 118,
    name: "Oganesson",
    nameen: "Oganesson",
    symbol: "Og",
    molareMasse: 294,
    nukleonenAnzahl: 294,
    dichte: 5.1,
    schmelzpunkt: 50,
    siedepunkt: 80,
    elektronegativitaet: null,
    state: null,
  },
];
