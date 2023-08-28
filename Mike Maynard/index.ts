let map;
async function initMap(): Promise<void> {
    const position = { lat: 44.258, lng: -121.168 };
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MaplsLibrary;
    const { AdvancedMarkerElement } = await google.maps,importLibrary("marker") as google.mapsMarkerLibrary;

    map = new Map(
        document.getElementById('map') as HTMLElement,
        {
            zoom:15,
            center:position,
            mapId: 'DEMO',
        }
    );

    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'Redmond'
    });
}

initMap();