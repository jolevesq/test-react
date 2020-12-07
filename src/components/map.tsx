import { render } from 'react-dom';

import { LatLngTuple, CRS } from 'leaflet';
import { MapContainer, TileLayer, ZoomControl, ScaleControl, AttributionControl } from 'react-leaflet';

import { Basemap, BasemapOptions } from '../common/basemap';
import { Projection } from '../common/projection';
import { VerticalTabs } from './appbar/appbar';
import { MiniDrawer } from './appbar/appbar2';

function Map(props: MapProps): JSX.Element {
    const { center, zoom, projection, language } = props;

    // get the needed projection. Web Mercator is out of the box but we need to create LCC
    // the projection will work with CBMT basemap. If another basemap would be use, update...
    const crs = projection === 3857 ? CRS.EPSG3857 : Projection.getProjection(projection);

    const basemap: Basemap = new Basemap();
    const basemaps: BasemapOptions[] = projection === 3857 ? basemap.wmCBMT : basemap.lccCBMT;

    const attribution = language === 'en-CA' ? basemap.attribution['en-CA'] : basemap.attribution['fr-CA'];

    const tabs = VerticalTabs();
    const drawer = MiniDrawer();

    return (
        <MapContainer center={center} zoom={zoom} crs={crs} zoomControl={false} attributionControl={false}>
            {basemaps.map((base) => (
                <TileLayer key={base.id} url={base.url} attribution={attribution} />
            ))}
            <ZoomControl position="bottomright" />
            <ScaleControl position="bottomright" imperial={false} />
            <AttributionControl position="bottomleft" />
            <div className="leaflet-control leaflet-bar cgp-appbar">{drawer}</div>
        </MapContainer>
    );
}

export function createMap(element: Element, config: MapConfig): void {
    const center: LatLngTuple = [config.lat, config.lng];

    render(<Map center={center} zoom={config.zoom} projection={config.projection} language={config.language} />, element);
}

interface MapConfig {
    lat: number;
    lng: number;
    zoom: number;
    projection: number;
    language: string;
}

interface MapProps {
    center: LatLngTuple;
    zoom: number;
    projection: number;
    language: string;
}
