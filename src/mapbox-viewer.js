import { canada } from "../static/data/canada.js";
import { icons } from "../static/icons.js"
import { mapStyles } from "../static/map-styles.js"

initMapbox();

/* Mapbox renders maps and map tiles with Web Mercator projection 
using the EPSG:3857 projected coordinate system 
(sometimes called EPSG:900913)*/

function initMapbox() {     
  mapboxgl.accessToken =
    "pk.eyJ1Ijoibmljby1hcmVsbGFubyIsImEiOiJjbDU2bTA3cmkxa3JzM2luejI2dnd3bzJsIn0.lKKSghBtWMQdXszpTJN32Q";
  const map = new mapboxgl.Map({
    container: "mapboxContainer", // container ID
    style: mapStyles.street.url,
    center: [-98.74, 56.415], // starting position [lng, lat]
    zoom: 4, // starting zoom
    antialias: true,
    projection: "globe", // display the map as a 3D globe
  });
  // Day sky
  map.on("style.load", () => {
    map.setFog({}); // Set the default atmosphere style
  });

//   const mapStyle = document.getElementById("map-style"); // Toggle Map style
//   map.setStyle(mapStyles[0]);
//   let toggleMapStyle = true;
//   mapStyle.onclick = function () {
//     if (toggleMapStyle) {
//         map.setStyle(mapStyles[8]);
//       const satelliteIcon = document.getElementById("satellite-icon");
//       satelliteIcon.setAttribute("d", icons.mapIcon);
//       this.setAttribute("title", "Map view");
//     } else {
//       const satelliteIcon = document.getElementById("satellite-icon");
//       map.setStyle(mapStyles[0]);
//       this.setAttribute("title", "Satellite view");
//       satelliteIcon.setAttribute("d", icons.satelliteIcon);
//     }
//     toggleMapStyle = !toggleMapStyle;
//   };

// Select province or Territory
  const pNames = [];
  const provinces = canada.provinces;
  const territories = canada.territories;
  territories.forEach((territory) => {
    provinces.push(territory);
  });
  const provinceMenu = document.getElementById("province-select");
  provinces.forEach((province) => {
    let option = document.createElement("option");
    option.innerHTML = province.provinceName;
    pNames.push(province.provinceName);
    provinceMenu.appendChild(option);
  });
  document.getElementById("province-select").addEventListener("change", function () {
    const pIndex = pNames.indexOf(this.value);
    const pCode = provinces[pIndex].code;  
// GET PROVINCE GEOJSON 🌐
getJson(
    "https://geogratis.gc.ca/services/geoname/en/geonames.geojson?concise=PROV&province=" +
      pCode
  ).then((pGeojson) => {
    console.log(pGeojson);
    map.addSource(pGeojson);
        console.log(map);
    citySelect.style.display = "inline-block";
  });
});

  // Go To Site 🏢
  const goTo = document.getElementById("go-to");
  let toggleGoTo = true;
  goTo.onclick = function () {
    if (toggleGoTo) {
      this.setAttribute("title", "Go to Canada");
      document.getElementById("go-to-icon").setAttribute("d", icons.worldIcon);
      // Fly To Downsview flyTo(viewer, -79.47, 43.73, 1000, -45.0, 0);
      // Fly to Carleton
      flyTo(map, -75.697, 45.384);
      provinceSelect.style.display = "none";
      citySelect.style.display = "none";
      siteSelect.style.display = "none";
      buildingSelect.style.display = "inline-block";
    } else {
      this.setAttribute("title", "Go to site");
      document.getElementById("go-to-icon").setAttribute("d", icons.goToIcon);
      // Fly to Canada
      flyTo(map, -98.74, 56.415, 4, 0);
      provinceSelect.style.display = "inline-block";
      citySelect.style.display = "none";
      siteSelect.style.display = "none";
      buildingSelect.style.display = "none";
    }
    toggleGoTo = !toggleGoTo;
  };
}

  // Toggle Nav bar
  const locationBar = document.getElementById("location");
  const locationButton = document.getElementById("close-nav-bar");
  let toggleLocationBar = false;
  locationButton.onclick = function () {
    locationBar.style.display = toggleLocationBar ? "inline-block" : "none";
    locationButton.style.transform = toggleLocationBar ? "" : "rotate(180deg)";
    const navBar = document.getElementById("nav-bar");
    navBar.style.backgroundColor = toggleLocationBar ? "" : "#FFFFFF00";
    navBar.style.boxShadow = toggleLocationBar ? "" : "none";
    toggleLocationBar = !toggleLocationBar;
  };


let provinceSelect = document.getElementById("province-select");// Select Provinces and Territories
let citySelect = document.getElementById("city-select");// Select Cities
let siteSelect = document.getElementById("site-select");// Select Site
let buildingSelect = document.getElementById("building-select");// Select Building

// FUNCTIONS _____________________________________________________________________________________________________

function flyTo(map, lng, lat, zoom = 15, pitch = 50){map.flyTo({
    center: [lng, lat],
    zoom: zoom,
    pitch: pitch,
    duration: 2000
    });
}

async function getJson(path) {
    let response = await fetch(path);
    let json = await response.json();
    return json;
  }
  
//   async function loadGeojson(geojson, viewer) {
//     const fillPromise = Cesium.GeoJsonDataSource.load(geojson, {
//       fill: Cesium.Color.fromBytes(251, 184, 41, 50),
//       clampToGround: true,
//     });
//     fillPromise.then(function (dataSource) {
//       viewer.dataSources.add(dataSource);
//       const entities = dataSource.entities.values;
//       viewer.flyTo(entities);
//     });
//   }