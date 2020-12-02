import React, { Component, Fragment, ReactElement } from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import TopContainer from './components/TopContainer';

import Map from './components/map/map';

import '../node_modules/leaflet/dist/leaflet.css';

export default class App extends Component<any, any> {
    //const muiTheme = createMuiTheme({});
    // render(): ReactElement {
    //     return (
    //         <Map></Map>
    //     );
    //   }
    // render(
    //     <MuiThemeProvider theme={muiTheme}>
    //         <TopContainer />
    //         <Map></Map>
    //     </MuiThemeProvider>,
    //     document.getElementById('root')
    // );
}

class TypesOfFood extends Component {
    constructor(prop) {
        super({ prop });
    }
    render(): ReactElement {
        return (
            <div>
                <h1>Types of Food:</h1>
                <Map></Map>
            </div>
        );
    }
}

// change code below this line
render(<TypesOfFood></TypesOfFood>, document.getElementById('root'));
