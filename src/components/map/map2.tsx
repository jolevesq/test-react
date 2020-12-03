import { Component, useState, useCallback, useMemo } from 'react';

import { Map } from 'leaflet';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

const center = [51.505, -0.09];
const zoom = 13;

function DisplayPosition({ map: Map }) {
    const [position, setPosition] = useState(map.getCenter());

    const onClick = useCallback(() => {
        map.setView(center, zoom);
    }, [map]);

    const onMove = useCallback(() => {
        setPosition(map.getCenter());
    }, [map]);

    useEffect(() => {
        map.on('move', onMove);
        return () => {
            map.off('move', onMove);
        };
    }, [map, onMove]);

    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)} <button onClick={onClick}>reset</button>
        </p>
    );
}

export function ExternalStateExample() {
    const [map, setMap] = useState(null);

    const displayMap = useMemo(
        () => (
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} whenCreated={setMap}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        ),
        []
    );

    render() return (
        <div>
            {map ? <DisplayPosition map={map} /> : null}
            {displayMap}
        </div>
    );
}

//render(<ExternalStateExample />);
