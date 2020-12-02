import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import TopContainer from './components/TopContainer';
import SampleContainer from './components/SampleContainer';

const muiTheme = createMuiTheme({});

render(
    <MuiThemeProvider theme={muiTheme}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <TopContainer />
                </Route>
                <Route path="/sample">
                    <SampleContainer />
                </Route>
            </Switch>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);
