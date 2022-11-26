$(document).ready(function () {
  // BASE MAP
  const osm = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        "Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors",
    }
  );
  const esri = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }
  );
  const ggl = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    {
      attribution: "Google",
    }
  );
  const ggl2 = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    {
        maxNativeZoom: 200,
        maxZoom: 200,
        attribution: '&copy; <a href="#">Developed By นายบัญชา ไวเปีย</a>',
    }
  );
  const ggl3 = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
    {
      attribution: "Google",
    }
  );
  const ggl4 = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}",
    {
      attribution: "Google",
    }
  );
  const ggl5 = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
    {
      attribution: "Google",
    }
  );
  const ggl6 = L.tileLayer(
    "https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}",
    {
      attribution: "Google",
    }
  );
  const tiles = L.tileLayer(
    "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
    {
      // const tiles = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      // ตั้งค่า Zoom ได้แบบ ไม่มีจำกัด
      maxNativeZoom: 200,
      maxZoom: 200,
      attribution: '&copy; <a href="#">Developed By นายบัญชา ไวเปีย</a>',
    }
  );

  // lat = 13, long = 100 zoom ครั้งแรกที่เรียกหน้าเว็บ
  const map = L.map("map", {

    // zoomDelta: 0.25, // ความละเอียดการ zoom
    // zoomSnap: 0, // ความละเอียดการ zoom
    // remove Zoom Control
    zoomControl: true,
    // layer
    layers: [tiles],
  }).setView([13.5, 100.5], 10);

  // ปิดการแสดง Leaflet ที่มุมล่างขวา
  map.attributionControl.setPrefix(false);

  // Add Point Marker
  var marker = L.marker([13.771399, 100.416523]).addTo(map);

  // Add วงกลม
  var circle = L.circle([13.852747, 100.463344], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 1000,
  }).addTo(map);

  // Add Polygon
  var polygon = L.polygon(
    [
      [13.644652, 100.514209],
      [13.583256, 100.745167],
      [13.754059, 100.665432],
    ],
    { color: "red", fillColor: "#f03", fillOpacity: 0.1 }
  ).addTo(map);

  // Add Popup
  //   map.on("click", function (e) {
  //     var popup = L.popup()
  //       .setLatLng(e.latlng)
  //       .setContent("You clicked the map at " + e.latlng.toString())
  //       .openOn(map);
  //   });

  // Add Tooltip
  marker.bindTooltip("I am a marker.").openTooltip();

  // Add Circle Tooltip
  circle.bindTooltip("I am a circle.").openTooltip();

  // Add Polygon Tooltip
  polygon.bindTooltip("I am a polygon.").openTooltip();

  // get lat long
  map.on("click", function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    // console.log(lat, lng);
  });

  // zoom to fly
    // map.on("click", function (e) { 
    //     map.flyTo(e.latlng, 20, { duration: 3 });
    // });
    

  // event zoom
  // map.on("zoomend", function (e) {
  //   var zoom = map.getZoom();
  //   // console.log(zoom);
  // });

  // group layer
  var baseMaps = {
    "Open Street Map": osm,
    Google: ggl,
    Google2: ggl2,
    Google3: ggl3,
    Google4: ggl4,
    Google5: ggl5,
    Google6: ggl6,
    Tiles: tiles,
  };

  // browser location
  //   map.locate({ setView: true, maxZoom: 16 });

  // get location
  //   function onLocationFound(e) {
  //     var radius = e.accuracy / 2;
  //     L.marker(e.latlng)
  //       .addTo(map)
  //       .bindPopup("You are within " + radius + " meters from this point")
  //       .openPopup();
  //     L.circle(e.latlng, radius).addTo(map);
  //   }
  //   map.on("locationfound", onLocationFound);

  //   // location follow
  //   map.on("locationfound", function (e) {
  //     L.marker(e.latlng).addTo(map).bindPopup("You are here!").openPopup();
  //   });

  // icon marker
  var myIcon = L.icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  var marker = L.marker([13.771399, 100.416523], { icon: myIcon }).addTo(map);

  // Init Leaflet-Geoman
  map.pm.addControls({ position: "topleft" });

  // draw start leaflet geoman
  map.on("pm:drawstart", (e) => {
    console.log(e);
    console.log(e.target);
  });

  // draw end leaflet geoman
  map.on("pm:drawend", (e) => {
    console.log(e);
  });
  

  // leaflet-geoman layers control
  var drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);
  map.pm.setGlobalOptions({ layerGroup: drawnItems });
  map.pm.addControls({ position: "topleft" });



  // group layer leaflet-geoman
  var overlayMaps = {
    esri: esri,
    Marker: marker,
    Circle: circle,
    Polygon: polygon,
    "Drawn Items": drawnItems,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(map);

  
  
  

});
