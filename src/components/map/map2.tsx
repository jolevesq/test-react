/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import { Component, useState, useCallback, useMemo, useEffect } from 'react';
import { render } from 'react-dom';

import { LatLngTuple, Map } from 'leaflet';
import { MapContainer, TileLayer, ScaleControl, Marker, useMapEvents } from 'react-leaflet';

import PropTypes from 'prop-types';

const center: LatLngTuple = [51.505, -0.09];
const zoom = 13;

function DisplayPosition({ map }) {
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

    const onZoom = useCallback(() => {
        console.log(`we zoom ${map.id}`);
    }, [map]);

    useEffect(() => {
        map.on('zoom', onZoom);
        return () => {
            map.off('zoom', onZoom);
        };
    }, [map, onZoom]);

    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <button type="button" onClick={onClick}>
                reset
            </button>
        </p>
    );
}

export function ExternalStateExample() {
    const [map, setMap] = useState(null);

    const displayMap = useMemo(
        () => (
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                whenCreated={setMap}
                eventHandlers={{
                    click: () => {
                        console.log('marker clicked');
                    },
                    move: () => {
                        console.log('marker move');
                    },
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ScaleControl position="bottomleft" imperial={false} />
            </MapContainer>
        ),
        []
    );

    return (
        <div>
            {map ? <DisplayPosition map={map} /> : null}
            {displayMap}
        </div>
    );
}

export function RenderMe() {
    render(<ExternalStateExample />, document.getElementById('root'));
}
