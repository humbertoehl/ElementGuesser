document.addEventListener("DOMContentLoaded", function () {
    const periodicTable = [
        { atomicNumber: 1, symbol: "H", name: "Hydrogen", groupBlock: "nonmetal", block: "s", group: 1 },
        { atomicNumber: 2, symbol: "He", name: "Helium", groupBlock: "noble_gas", block: "s", group: 18 },
        { atomicNumber: 3, symbol: "Li", name: "Lithium", groupBlock: "alkali metal", block: "s", group: 1 },
        { atomicNumber: 4, symbol: "Be", name: "Beryllium", groupBlock: "alkaline earth metal", block: "s", group: 2 },
        { atomicNumber: 5, symbol: "B", name: "Boron", groupBlock: "metalloid", block: "p", group: 13 },
        { atomicNumber: 6, symbol: "C", name: "Carbon", groupBlock: "nonmetal", block: "p", group: 14 },
        { atomicNumber: 7, symbol: "N", name: "Nitrogen", groupBlock: "nonmetal", block: "p", group: 15 },
        { atomicNumber: 8, symbol: "O", name: "Oxygen", groupBlock: "nonmetal", block: "p", group: 16 },
        { atomicNumber: 9, symbol: "F", name: "Fluorine", groupBlock: "halogen", block: "p", group: 17 },
        { atomicNumber: 10, symbol: "Ne", name: "Neon", groupBlock: "noble_gas", block: "p", group: 18 },
        { atomicNumber: 11, symbol: "Na", name: "Sodium", groupBlock: "alkali metal", block: "s", group: 1 },
        { atomicNumber: 12, symbol: "Mg", name: "Magnesium", groupBlock: "alkaline earth metal", block: "s", group: 2 },
        { atomicNumber: 13, symbol: "Al", name: "Aluminum", groupBlock: "post-transition metal", block: "p", group: 13 },
        { atomicNumber: 14, symbol: "Si", name: "Silicon", groupBlock: "metalloid", block: "p", group: 14 },
        { atomicNumber: 15, symbol: "P", name: "Phosphorus", groupBlock: "nonmetal", block: "p", group: 15 },
        { atomicNumber: 16, symbol: "S", name: "Sulfur", groupBlock: "nonmetal", block: "p", group: 16 },
        { atomicNumber: 17, symbol: "Cl", name: "Chlorine", groupBlock: "halogen", block: "p", group: 17 },
        { atomicNumber: 18, symbol: "Ar", name: "Argon", groupBlock: "noble_gas", block: "p", group: 18 },
        { atomicNumber: 19, symbol: "K", name: "Potassium", groupBlock: "alkali metal", block: "s", group: 1 },
        { atomicNumber: 20, symbol: "Ca", name: "Calcium", groupBlock: "alkaline earth metal", block: "s", group: 2 },
        { atomicNumber: 21, symbol: "Sc", name: "Scandium", groupBlock: "transition metal", block: "d", group: 3 },
        { atomicNumber: 22, symbol: "Ti", name: "Titanium", groupBlock: "transition metal", block: "d", group: 4 },
        { atomicNumber: 23, symbol: "V", name: "Vanadium", groupBlock: "transition metal", block: "d", group: 5 },
        { atomicNumber: 24, symbol: "Cr", name: "Chromium", groupBlock: "transition metal", block: "d", group: 6 },
        { atomicNumber: 25, symbol: "Mn", name: "Manganese", groupBlock: "transition metal", block: "d", group: 7 },
        { atomicNumber: 26, symbol: "Fe", name: "Iron", groupBlock: "transition metal", block: "d", group: 8 },
        { atomicNumber: 27, symbol: "Co", name: "Cobalt", groupBlock: "transition metal", block: "d", group: 9 },
        { atomicNumber: 28, symbol: "Ni", name: "Nickel", groupBlock: "transition metal", block: "d", group: 10 },
        { atomicNumber: 29, symbol: "Cu", name: "Copper", groupBlock: "transition metal", block: "d", group: 11 },
        { atomicNumber: 30, symbol: "Zn", name: "Zinc", groupBlock: "transition metal", block: "d", group: 12 },
        { atomicNumber: 31, symbol: "Ga", name: "Gallium", groupBlock: "post-transition metal", block: "p", group: 13 },
        { atomicNumber: 32, symbol: "Ge", name: "Germanium", groupBlock: "metalloid", block: "p", group: 14 },
        { atomicNumber: 33, symbol: "As", name: "Arsenic", groupBlock: "metalloid", block: "p", group: 15 },
        { atomicNumber: 34, symbol: "Se", name: "Selenium", groupBlock: "nonmetal", block: "p", group: 16 },
        { atomicNumber: 35, symbol: "Br", name: "Bromine", groupBlock: "halogen", block: "p", group: 17 },
        { atomicNumber: 36, symbol: "Kr", name: "Krypton", groupBlock: "noble_gas", block: "p", group: 18 },
        { atomicNumber: 37, symbol: "Rb", name: "Rubidium", groupBlock: "alkali metal", block: "s", group: 1 },
        { atomicNumber: 38, symbol: "Sr", name: "Strontium", groupBlock: "alkaline earth metal", block: "s", group: 2 },
        { atomicNumber: 39, symbol: "Y", name: "Yttrium", groupBlock: "transition metal", block: "d", group: 3 },
        { atomicNumber: 40, symbol: "Zr", name: "Zirconium", groupBlock: "transition metal", block: "d", group: 4 },
        { atomicNumber: 41, symbol: "Nb", name: "Niobium", groupBlock: "transition metal", block: "d", group: 5 },
        { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", groupBlock: "transition metal", block: "d", group: 6 },
        { atomicNumber: 43, symbol: "Tc", name: "Technetium", groupBlock: "transition metal", block: "d", group: 7 },
        { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", groupBlock: "transition metal", block: "d", group: 8 },
        { atomicNumber: 45, symbol: "Rh", name: "Rhodium", groupBlock: "transition metal", block: "d", group: 9 },
        { atomicNumber: 46, symbol: "Pd", name: "Palladium", groupBlock: "transition metal", block: "d", group: 10 },
        { atomicNumber: 47, symbol: "Ag", name: "Silver", groupBlock: "transition metal", block: "d", group: 11 },
        { atomicNumber: 48, symbol: "Cd", name: "Cadmium", groupBlock: "transition metal", block: "d", group: 12 },
        { atomicNumber: 49, symbol: "In", name: "Indium", groupBlock: "post-transition metal", block: "p", group: 13 },
        { atomicNumber: 50, symbol: "Sn", name: "Tin", groupBlock: "post-transition metal", block: "p", group: 14 },
        { atomicNumber: 51, symbol: "Sb", name: "Antimony", groupBlock: "metalloid", block: "p", group: 15 },
        { atomicNumber: 52, symbol: "Te", name: "Tellurium", groupBlock: "metalloid", block: "p", group: 16 },
        { atomicNumber: 53, symbol: "I", name: "Iodine", groupBlock: "halogen", block: "p", group: 17 },
        { atomicNumber: 54, symbol: "Xe", name: "Xenon", groupBlock: "noble_gas", block: "p", group: 18 },
        { atomicNumber: 55, symbol: "Cs", name: "Cesium", groupBlock: "alkali metal", block: "s", group: 1 },
        { atomicNumber: 56, symbol: "Ba", name: "Barium", groupBlock: "alkaline earth metal", block: "s", group: 2 },
        { atomicNumber: 57, symbol: "La", name: "Lanthanum", groupBlock: "lanthanide", block: "f", group: 3 },
        { atomicNumber: 58, symbol: "Ce", name: "Cerium", groupBlock: "lanthanide", block: "f", group: 4 },
        { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", groupBlock: "lanthanide", block: "f", group: 5 },
        { atomicNumber: 60, symbol: "Nd", name: "Neodymium", groupBlock: "lanthanide", block: "f", group: 6 },
        { atomicNumber: 61, symbol: "Pm", name: "Promethium", groupBlock: "lanthanide", block: "f", group: 7 },
        { atomicNumber: 62, symbol: "Sm", name: "Samarium", groupBlock: "lanthanide", block: "f", group: 8 },
        { atomicNumber: 63, symbol: "Eu", name: "Europium", groupBlock: "lanthanide", block: "f", group: 9 },
        { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", groupBlock: "lanthanide", block: "f", group: 10 },
        { atomicNumber: 65, symbol: "Tb", name: "Terbium", groupBlock: "lanthanide", block: "f", group: 11 },
        { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", groupBlock: "lanthanide", block: "f", group: 12 },
        { atomicNumber: 67, symbol: "Ho", name: "Holmium", groupBlock: "lanthanide", block: "f", group: 13 },
        { atomicNumber: 68, symbol: "Er", name: "Erbium", groupBlock: "lanthanide", block: "f", group: 14 },
        { atomicNumber: 69, symbol: "Tm", name: "Thulium", groupBlock: "lanthanide", block: "f", group: 15 },
        { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", groupBlock: "lanthanide", block: "f", group: 16 },
        { atomicNumber: 71, symbol: "Lu", name: "Lutetium", groupBlock: "transition metal", block: "f", group: 17 },
        { atomicNumber: 72, symbol: "Hf", name: "Hafnium", groupBlock: "transition metal", block: "d", group: 4 },
        { atomicNumber: 73, symbol: "Ta", name: "Tantalum", groupBlock: "transition metal", block: "d", group: 5 },
        { atomicNumber: 74, symbol: "W", name: "Tungsten", groupBlock: "transition metal", block: "d", group: 6 },
        { atomicNumber: 75, symbol: "Re", name: "Rhenium", groupBlock: "transition metal", block: "d", group: 7 },
        { atomicNumber: 76, symbol: "Os", name: "Osmium", groupBlock: "transition metal", block: "d", group: 8 },
        { atomicNumber: 77, symbol: "Ir", name: "Iridium", groupBlock: "transition metal", block: "d", group: 9 },
        { atomicNumber: 78, symbol: "Pt", name: "Platinum", groupBlock: "transition metal", block: "d", group: 10 },
        { atomicNumber: 79, symbol: "Au", name: "Gold", groupBlock: "transition metal", block: "d", group: 11 },
        { atomicNumber: 80, symbol: "Hg", name: "Mercury", groupBlock: "transition metal", block: "d", group: 12 },
        { atomicNumber: 81, symbol: "Tl", name: "Thallium", groupBlock: "post-transition metal", block: "p", group: 13 },
        { atomicNumber: 82, symbol: "Pb", name: "Lead", groupBlock: "post-transition metal", block: "p", group: 14 },
        { atomicNumber: 83, symbol: "Bi", name: "Bismuth", groupBlock: "post-transition metal", block: "p", group: 15 },
        { atomicNumber: 84, symbol: "Po", name: "Polonium", groupBlock: "post-transition metal", block: "p", group: 16 },
        { atomicNumber: 85, symbol: "At", name: "Astatine", groupBlock: "halogen", block: "p", group: 17 },
        { atomicNumber: 86, symbol: "Rn", name: "Radon", groupBlock: "noble_gas", block: "p", group: 18 },
        { atomicNumber: 87, symbol: "Fr", name: "Francium", groupBlock: "alkali metal", block: "s", group: 1 },
        { atomicNumber: 88, symbol: "Ra", name: "Radium", groupBlock: "alkaline earth metal", block: "s", group: 2 },
        { atomicNumber: 89, symbol: "Ac", name: "Actinium", groupBlock: "actinide", block: "f", group: 3 },
        { atomicNumber: 90, symbol: "Th", name: "Thorium", groupBlock: "actinide", block: "f", group: 4 },
        { atomicNumber: 91, symbol: "Pa", name: "Protactinium", groupBlock: "actinide", block: "f", group: 5 },
        { atomicNumber: 92, symbol: "U", name: "Uranium", groupBlock: "actinide", block: "f", group: 6 },
        { atomicNumber: 93, symbol: "Np", name: "Neptunium", groupBlock: "actinide", block: "f", group: 7 },
        { atomicNumber: 94, symbol: "Pu", name: "Plutonium", groupBlock: "actinide", block: "f", group: 8 },
        { atomicNumber: 95, symbol: "Am", name: "Americium", groupBlock: "actinide", block: "f", group: 9 },
        { atomicNumber: 96, symbol: "Cm", name: "Curium", groupBlock: "actinide", block: "f", group: 10 },
        { atomicNumber: 97, symbol: "Bk", name: "Berkelium", groupBlock: "actinide", block: "f", group: 11 },
        { atomicNumber: 98, symbol: "Cf", name: "Californium", groupBlock: "actinide", block: "f", group: 12 },
        { atomicNumber: 99, symbol: "Es", name: "Einsteinium", groupBlock: "actinide", block: "f", group: 13 },
        { atomicNumber: 100, symbol: "Fm", name: "Fermium", groupBlock: "actinide", block: "f", group: 14 },
        { atomicNumber: 101, symbol: "Md", name: "Mendelevium", groupBlock: "actinide", block: "f", group: 15 },
        { atomicNumber: 102, symbol: "No", name: "Nobelium", groupBlock: "actinide", block: "f", group: 16 },
        { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", groupBlock: "actinide", block: "f", group: 17 },
        { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", groupBlock: "transition metal", block: "d", group: 4 },
        { atomicNumber: 105, symbol: "Db", name: "Dubnium", groupBlock: "transition metal", block: "d", group: 5 },
        { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", groupBlock: "transition metal", block: "d", group: 6 },
        { atomicNumber: 107, symbol: "Bh", name: "Bohrium", groupBlock: "transition metal", block: "d", group: 7 },
        { atomicNumber: 108, symbol: "Hs", name: "Hassium", groupBlock: "transition metal", block: "d", group: 8 },
        { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", groupBlock: "unknown", block: "d", group: 9 },
        { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", groupBlock: "unknown", block: "d", group: 10 },
        { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", groupBlock: "unknown", block: "d", group: 11 },
        { atomicNumber: 112, symbol: "Cn", name: "Copernicium", groupBlock: "transition metal", block: "d", group: 12 },
        { atomicNumber: 113, symbol: "Nh", name: "Nihonium", groupBlock: "unknown", block: "p", group: 13 },
        { atomicNumber: 114, symbol: "Fl", name: "Flerovium", groupBlock: "post-transition metal", block: "p", group: 14 },
        { atomicNumber: 115, symbol: "Mc", name: "Moscovium", groupBlock: "unknown", block: "p", group: 15 },
        { atomicNumber: 116, symbol: "Lv", name: "Livermorium", groupBlock: "post-transition metal", block: "p", group: 16 },
        { atomicNumber: 117, symbol: "Ts", name: "Tennessine", groupBlock: "halogen", block: "p", group: 17 },
        { atomicNumber: 118, symbol: "Og", name: "Oganesson", groupBlock: "noble_gas", block: "p", group: 18 },
    ];

  const elementInput = document.getElementById("elementInput");
  const scoreText = document.getElementById("scoreText");
  const periodicTableDiv = document.getElementById("periodic-table");

  let totalElementsFound = 0;

  const groupBlockColors = {
    "nonmetal": "#BF1F2C",
    "noble_gas": "#0367A6",
    "alkali metal": "purple",
    "alkaline earth metal": "green",
    "transition metal": "#BF9039",
    "post-transition metal": "brown",
    "metalloid": "teal",
    "halogen": "pink",
    "lanthanide": "indigo",
    "actinide": "violet",
    "unknown": "gray",
  };

  // Function to dynamically generate the periodic table elements
  function generatePeriodicTable() {
    const blockDivs = {
      s: document.getElementById("s"),
      p: document.getElementById("p"),
      d: document.getElementById("d"),
      f: document.getElementById("f"),
    };
  
    for (const element of periodicTable) {
      const elementDiv = document.createElement("div");
      elementDiv.classList.add("element", element.block); // Add the block class
      elementDiv.dataset.atomicNumber = element.atomicNumber;
      elementDiv.innerHTML = `<span class="atomic-number">${element.atomicNumber}</span><br><span class="symbol">?</span><br><span class="name">???</span>`;
  
      blockDivs[element.block].appendChild(elementDiv);
    }
  }

  function updatePeriodicTable() {
    const inputSymbol = elementInput.value.trim().toUpperCase();

    // Find the corresponding element in the periodic table
    const foundElement = periodicTable.find(
      (element) => element.symbol.toUpperCase() === inputSymbol || element.name.toUpperCase() === inputSymbol
    );

    if (foundElement) {
      // Update the corresponding element card with symbol, name, atomic number, and color
      const elementDiv = periodicTableDiv.querySelector(`[data-atomic-number="${foundElement.atomicNumber}"]`);
      if (elementDiv) {
        elementDiv.innerHTML = `<span class="atomic-number">${foundElement.atomicNumber}</span><br><span class="symbol">${foundElement.symbol}</span><br><span class="name">${foundElement.name}</span>`;
        elementDiv.style.backgroundColor = groupBlockColors[foundElement.groupBlock];
        totalElementsFound++; // Increment the counter
        scoreText.textContent = `${totalElementsFound}/${periodicTable.length} elements found!`; // Update scoreText
      }
    }
  }

  elementInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      updatePeriodicTable();
      elementInput.value = "";
    }
  });

  // Call the function to generate the periodic table on page load
  generatePeriodicTable();
});