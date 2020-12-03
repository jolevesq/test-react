/* eslint-disable global-require */
import { Component, useState, useCallback } from 'react';

import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

// import myIcon from '../../../dist/ima/marker-icon_2b3e1fa.png';

const testring = 'test';

function LocationMarker() {
    let myMap: any;
    const [position] = useState({ lat: 47, lng: -100 });
    const mapClick = useMapEvents({
        click() {
            myMap = mapClick;
            mapClick.flyTo(position, mapClick.getZoom());
        },
    });

    // setTimeout(() => {
    //     useCallback(() => {
    //         myMap.setView([70, -80], 2);
    //     }, [myMap]);
    // }, 5000);
    // const onClick = useCallback(() => {
    //     myMap.setView([70, -80], 2);
    // }, [myMap]);

    return position === null ? null : <Marker key="myKey" position={position} />;
}

// function notifyReady() {
//     const mapReady = useMapEvents({
//         whenReady() {
//             console.log('I am ready');
//         },
//     });
// }

export default class Map extends Component<MapConfig, MapConfig> {
    constructor(props: MapConfig) {
        super(props);
        this.state = props;
        console.log(testring);
    }

    render(): JSX.Element {
        const center = this.state;
        return (
            <MapContainer center={[center.lat, center.lng]} zoom={10} scrollWheelZoom={false} whenCreated={setMap}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker />
            </MapContainer>
        );
    }
}

interface MapConfig {
    lat: number;
    lng: number;
    zoom: number;
}
