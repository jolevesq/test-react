/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import { Component, useState, useCallback, useMemo, useEffect } from 'react';
import { render } from 'react-dom';

import { LatLngTuple, Map } from 'leaflet';
import { MapContainer, TileLayer, ScaleControl, Marker, useMapEvents, ZoomControl } from 'react-leaflet';

import PropTypes from 'prop-types';
import { ContactSupportOutlined } from '@material-ui/icons';

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

    useMapEvents({
        move: () => {
          console.log('I moved');
        },
    });

    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <button type="button" onClick={onClick}>
                reset
            </button>
        </p>
    );
}

export function ExternalStateExample(): JSX.Element {
    const [map, setMap] = useState(null);

    const displayMap = useMemo(
        () => (
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                whenCreated={setMap}
                whenReady={() => {
                    console.log('ready');
                }}
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
                <ZoomControl position="bottomleft" />
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

export function RenderMe(): void {
    render(<ExternalStateExample />, document.getElementById('root'));
}
