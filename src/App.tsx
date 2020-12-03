/* eslint-disable no-underscore-dangle */

import { render } from 'react-dom';
import { Icon, Marker } from 'leaflet';

// Leaflet icons import to solve issues 4968
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import TopContainer from './components/TopContainer';

import Map from './components/map/map';
import { ExternalStateExample } from './components/map2';

import '../node_modules/leaflet/dist/leaflet.css';

// hack for default leaflet icon: https://github.com/Leaflet/Leaflet/issues/4968
// TODO: put somewhere else
const DefaultIcon = new Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

Marker.prototype.options.icon = DefaultIcon;

// change code below this line
// render(<TopContainer />, document.getElementById('root'));

// loop trought all the maps and create an app for it.
// TODO: create an instance of REACT for each map to be able to modify values like language
// TODO: get config from CGP API, script mapping API and inline HTML
const configs = [
    { lat: 47, lng: -90, zoom: 10 },
    { lat: 47, lng: -110, zoom: 5 },
];
const maps: Element[] = [...document.getElementsByClassName('llwb-map')];
[...maps].forEach((map: Element, index: number) => {
    // const mapElement = new Map(configs[index]);
    // render(mapElement.render(), map);
    const mapElement = ExternalStateExample();
    render(mapElement, map);
});
