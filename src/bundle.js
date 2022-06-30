import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const projects = [
    {
      name: "Architecture Building",
      number: 22,
      code: "AA",
      id: "22.AA",
      authors: "Nico, DCI",
      type: "building",
      zone: "Z2",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/AA"
    },
    {
      name: "Arise",
      number: 25,
      code: "AR",
      id: "25.AR",
      authors: "MontgomerySisam Architects",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/AR"
    },
    {
      name: "Azrieli Pavilion",
      number: 32,
      code: "AP",
      id: "32.AP",
      authors: "Freed",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/AP"
    },
    {
      name: "Azrieli Theatre",
      number: 31,
      code: "AT",
      id: "31.AT",
      authors: "Nico, Kitty",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/AT"
    },
    {
      name: "Canal Building",
      number: 42,
      code: "CB",
      id: "42.CB",
      authors: "DCI (Katy, Bassam) - GRC architects / Moriyama and Teshima Architects",
      type: "building",
      zone: "Z2",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/CB"
    },
    {
      name: "Dunton Tower",
      number: 21,
      code: "DT",
      id: "21.DT",
      authors: "Nico (2020), Jennii  Yu & Alex Fiori (DCI 2013), Kitty",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/DT"
    },
    {
      name: "Health and Science",
      number: 49,
      code: "HS",
      id: "49.HS",
      authors: "MontgomerySisam Architects",
      type: "building",
      zone: "Z2",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/HS"
    },
    {
      name: "Herzberg Laboratory",
      number: 13,
      code: "HP",
      id: "13.HP",
      authors: "Freed, Cali, Kitty, Yasmine",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/HP"
    },
    {
      name: "Loeb Building",
      number: 15,
      code: "LA",
      id: "15.LA",
      authors: "Cali, Kitty",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/LA"
    },
    {
      name: "Mackenzie Building",
      number: 10,
      code: "ME",
      id: "10.ME",
      authors: "DCI",
      type: "building",
      zone: "Z2",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/ME"
    },
    {
      name: "Macodrum Library",
      number: 2,
      code: "ML",
      id: "2.ML",
      authors: "Jessica Babe",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/ML"
    },
    {
      name: "Minto",
      number: 27,
      code: "MC",
      id: "27.MC",
      authors: "Marco, Ruth Xing (DCI 2014)",
      type: "building",
      zone: "Z2",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/MC"
    },
    {
      name: "Nicol",
      number: 51,
      code: "NI",
      id: "51.NI",
      authors: "Harari Pontarini Architects",
      type: "building",
      zone: "Z2",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/NI"
    },
    {
      name: "Paterson Hall",
      number: 3,
      code: "PA",
      id: "3.PA",
      authors: "Freed",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/PA"
    },
    {
      name: "River Building (Richcraft Hall)",
      number: 43,
      code: "RB",
      id: "43.RB",
      authors: "Jieru Li (DCI 2014) - GRC architects / Moriyama and Teshima Architects",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/RB"
    },
    {
      name: "Social Sciences Research Building",
      number: 24,
      code: "SR",
      id: "24.SR",
      authors: "Cali, Yasmine",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/SR"
    },
    {
      name: "Southam Hall",
      number: 4,
      code: "SA",
      id: "4.SA",
      authors: "Kitty, Freed",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/SA"
    },
    {
      name: "Steacie Building",
      number: 12,
      code: "SC",
      id: "12.SC",
      authors: "Reem, Cali, Kitty",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/SC"
    },
    {
      name: "Tiny Home River",
      number: 52,
      code: "TH",
      id: "55.TH",
      authors: "Scott Bucking",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/TH"
    },
    {
      name: "Tory Building",
      number: 1,
      code: "TB",
      id: "1.TB",
      authors: "Kitty, Jessica B, Kamila Lukus (DCI 2014)",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/TB"
    },
    {
      name: "University Centre",
      number: 7,
      code: "UC",
      id: "7.UC",
      authors: "Kitty, Nico, Marco - (BBB)",
      type: "building",
      zone: "Z2",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/UC"
    },
    {
      name: "Vsim",
      number: 38,
      code: "VS",
      id: "38.VS",
      authors: "Hilary, Conor (physical model), Jessica Brooks (DCI 2014)",
      type: "building",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/VS"
    },
    {
      name: "Frontenac House",
      number: 41,
      code: "FR",
      id: "41.FR",
      authors: "Carlee - IBI Group/Teeple Architects",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/FR"
    },
    {
      name: "Glengarry House",
      number: 18,
      code: "GH",
      id: "18.GH",
      authors: "Erika, Kale",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/GH"
    },
    {
      name: "Lanark House",
      number: 6,
      code: "LH",
      id: "6.LH",
      authors: "Freed",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/LH"
    },
    {
      name: "Leeds House",
      number: 30,
      code: "LE",
      id: "30.LE",
      authors: "Kitty",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/LE"
    },
    {
      name: "Lennox and Addington House",
      number: 44,
      code: "LX",
      id: "44.LX",
      authors: "Reem",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/LX"
    },
    {
      name: "Prescott House",
      number: 34,
      code: "PH",
      id: "34.PH",
      authors: "Kale, Jieru Li (DCI 2014)",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/PH"
    },
    {
      name: "Renfrew House",
      number: 5,
      code: "RH",
      id: "5.RH",
      authors: "Freed",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/RH"
    },
    {
      name: "Residence Commons",
      number: 19,
      code: "CO",
      id: "19.CO",
      authors: "Arkoun",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/CO"
    },
    {
      name: "Russel and Grenville House",
      number: 14,
      code: "RU",
      id: "14.RU",
      authors: "DCI",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/RU"
    },
    {
      name: "Saint Patricks",
      number: 23,
      code: "SP",
      id: "23.SP",
      authors: "Marco",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/SP"
    },
    {
      name: "Stormont and Dundas",
      number: 26,
      code: "SD",
      id: "26.SD",
      authors: "Zarina, Kitty",
      type: "building",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/SD"
    },
    {
      name: "Athletic Alumni and Fieldhouse",
      number: 9,
      code: "AC",
      id: "9.AC",
      authors: "Marco",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/AC"
    },
    {
      name: "Ice House and Gymnasium",
      number: 39,
      code: "IH",
      id: "39.IH",
      authors: "Mira, Kitty",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/IH"
    },
    {
      name: "Tennis Centre",
      number: 40,
      code: "TC",
      id: "40.TC",
      authors: "Nico, Kitty",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/TC"
    },
    {
      name: "Parking Garage 9",
      number: 9,
      code: "P9",
      id: "9.P9",
      authors: "Nico",
      type: "parking",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/P9"
    },
    {
      name: "Parking Garage 18",
      number: 46,
      code: "PS",
      id: "46.PS",
      authors: "Reem",
      type: "parking",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/PS"
    },
    {
      name: "OC Transpo",
      number: null,
      code: "OC",
      id: "",
      authors: "",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/OC"
    },
    {
      name: "Bronson Sub-Station",
      number: 72,
      code: "SS",
      id: "72.SS",
      authors: "",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/SS"
    },
    {
      name: "Carleton Technology and Training Centre",
      number: 29,
      code: "TT",
      id: "29.TT",
      authors: "DCI",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/TT"
    },
    {
      name: "Centre for Home Energy Research (CHER)",
      number: 47,
      code: "UH",
      id: "47.UH",
      authors: "HOK Architects - CSALT",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/UH"
    },
    {
      name: "Colonel By Child Care Centre",
      number: 28,
      code: "CC",
      id: "28.CC",
      authors: "Hilary",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/CC"
    },
    {
      name: "Maintenance Building",
      number: 11,
      code: "MB",
      id: "11.MB",
      authors: "Reem, Nico",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/MB"
    },
    {
      name: "Nesbitt Biology Building and National Wildlife Research Centre",
      number: 16,
      code: "NB",
      id: "16.NB",
      authors: "DCI - (Diamond Donald Schmitt and Katz Webster Clancey Architects)",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/NB"
    },
    {
      name: "Roberson Hall",
      number: 17,
      code: "RO",
      id: "17.RO",
      authors: "Jerry, Kale, Yasmine, Alec",
      type: "building",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/RO"
    },
    {
      name: "River - Exterior Zone 1",
      number: 61,
      code: "Z1",
      id: "61.Z",
      authors: "Marco / Rehab, Arkoun",
      type: "exterior zone",
      zone: "Z1",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/Z1"
    },
    {
      name: "FED - Exterior Zone 2",
      number: 62,
      code: "Z2",
      id: "62.Z",
      authors: "Hilary / Kale / Rehab / Nico / Arkoun",
      type: "exterior zone",
      zone: "Z2",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/Z2"
    },
    {
      name: "Residences- Exterior Zone 3",
      number: 63,
      code: "Z3",
      id: "63.Z",
      authors: "Arkoun",
      type: "exterior zone",
      zone: "Z3",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/Z3"
    },
    {
      name: "Bronson - Exterior Zone 4",
      number: 64,
      code: "Z4",
      id: "64.Z",
      authors: "Rehab / Kitty / Nico / Arkoun",
      type: "exterior zone",
      zone: "Z4",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/Z4"
    },
    {
      name: "Roads",
      number: 60,
      code: "RD",
      id: "60.RD",
      authors: "Arkoun, Nico",
      type: "exterior zone",
      zone: "cu",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/RD"
    },
    {
      name: "Gas",
      number: 70,
      code: "GA",
      id: "70.GA",
      authors: "Nico",
      type: "services",
      zone: "cu",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/GA"
    },
    {
      name: "Lighting Fixtures",
      number: 71,
      code: "SM",
      id: "71.SM",
      authors: "Nico",
      type: "services",
      zone: "cu",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/SM"
    },
    {
      name: "Parking",
      number: 75,
      code: "PK",
      id: "75.PK",
      authors: "Nico",
      type: "services",
      zone: "cu",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/PK"
    },
    {
      name: "Storm",
      number: 73,
      code: "SM",
      id: "73.SM",
      authors: "Nico",
      type: "services",
      zone: "cu",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/SM"
    },
    {
      name: "Tunnels",
      number: 65,
      code: "TU",
      id: "65.TU",
      authors: "Arkoun, Elisa, Sharmeen, Alec, Yasmine, Hilary, Aidan",
      type: "services",
      zone: "cu",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/TU"
    },
    {
      name: "Water",
      number: 74,
      code: "WA",
      id: "74.WA",
      authors: "Nico",
      type: "services",
      zone: "cu",
      url: "https://github.com/nicoarellano/ifc-js-crash-course/static/ifc/WA"
    }
  ];

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../../../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc('your/IFC/path/model.ifc');

// Get the URL parameter
const currentURL = window.location.href;
const url = new URL(currentURL);
const currentProjectID = url.searchParams.get("id");

// Get the current project
const currentProject = projects.find(project => project.id == currentProjectID);

// Add the project URL to the iframe
const iframe = document.getElementById("model-iframe");
iframe.src = currentProject.url;
