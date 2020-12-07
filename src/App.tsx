// import i18n (needs to be bundled ;))
import './assests/i18n/i18n';

import { Icon, Marker } from 'leaflet';

// Leaflet icons import to solve issues 4968
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import { createMap } from './components/map';

import '../node_modules/leaflet/dist/leaflet.css';

// hack for default leaflet icon: https://github.com/Leaflet/Leaflet/issues/4968
// TODO: put somewhere else
const DefaultIcon = new Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

Marker.prototype.options.icon = DefaultIcon;

// loop trought all the maps and create an app for it.
// TODO: create an instance of REACT for each map to be able to modify values like language
// TODO: get config from CGP API, script mapping API and inline HTML
const configs = [
    { lat: 47, lng: -90, zoom: 10, projection: 3857, language: 'en-CA' },
    { lat: 47, lng: -110, zoom: 5, projection: 3978, language: 'fr-CA' },
];
const maps: Element[] = [...document.getElementsByClassName('llwb-map')];
[...maps].forEach((map: Element, index: number) => {
    createMap(map, configs[index]);
});
