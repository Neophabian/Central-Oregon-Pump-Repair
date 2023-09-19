let map;

async function initMap() {
    const position = { lat: 44.258, lng: -121.168 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: position,
        mapId: "DEMO",
    });

    const marker = AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Redmond",
    });
}

initMap();