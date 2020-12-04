import L from 'leaflet';

export function createMap(): void {
    const myMap = L.map('vanilla', {
        center: [37.7749, -122.4194],
        zoom: 13,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Who really care',
        maxZoom: 18,
    }).addTo(myMap);
}
