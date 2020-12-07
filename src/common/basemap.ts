/**
 * A class to get a basemap for a define projection. For the moment, we a  Web Mercator and a LCC basemap.
 * We intend to have only one basemap per projection to avoid the need of a basemap switcher.
 * If we add a new projection, we need to also add a basemap.
 *
 * @export
 * @class Basemap
 */
export class Basemap {
    // LCC basemap options
    private lccParamCBMT: BasemapOptions[] = [
        {
            id: 'lccCBMT',
            url:
                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/default/default028mm/{z}/{y}/{x}.jpg',
            options: {
                tms: false,
                tileSize: 256,
                attribution: false,
                noWrap: false,
            },
        },
    ];

    // Web Mercator basemap options
    private wmParamCBMT: BasemapOptions[] = [
        {
            id: 'wmGeomCBMT',
            url:
                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3857/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT_CBCT_GEOM_3857/default/default028mm/{z}/{y}/{x}.jpg',
            options: {
                tms: false,
                tileSize: 256,
                attribution: false,
                noWrap: true,
            },
        },
        {
            id: 'wmLabelCBMT',
            url:
                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3857/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT_TXT_3857/default/default028mm/{z}/{y}/{x}.png',
            options: {
                tms: false,
                tileSize: 256,
                attribution: false,
                noWrap: true,
            },
        },
    ];

    // attribution to add the the map
    private attributionVal: Attribution = {
        'en-CA': '&copy Her Majesty the Queen in Right of Canada, as represented by the Minister of Natural Resources',
        'fr-CA': '&copy Sa Majesté la Reine du Chef du Canada, représentée par le ministre des Ressources naturelles',
    };

    get lccCBMT(): BasemapOptions[] {
        return this.lccParamCBMT;
    }

    get wmCBMT(): BasemapOptions[] {
        return this.wmParamCBMT;
    }

    get attribution(): Attribution {
        return this.attributionVal;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    // eslint-disable-next-line no-useless-constructor
    constructor() {}
}

interface BasemapConfig {
    tms: boolean;
    tileSize: number;
    attribution: boolean;
    noWrap: boolean;
}

export interface BasemapOptions {
    id: string;
    url: string;
    options: BasemapConfig;
}

export interface Attribution {
    'en-CA': string;
    'fr-CA': string;
}
