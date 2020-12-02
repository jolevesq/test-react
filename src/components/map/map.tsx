import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default class Map extends Component {
    state = {
        lat: 37.7749,
        lng: -122.4194,
        zoom: 13,
    }
    private position = [51.505, -0.09]

    render() { return (

        <MapContainer
        center={[ this.state.lat, this.state.lng ]}
        zoom={10}
        >
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"></TileLayer>
        </MapContainer>

    )}

 }