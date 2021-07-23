import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GoogleMapComponent from './components/GoogleMapComponent';
import CheckinComponent from './components/CheckinComponent';
// import { AuthProvider } from './contexts/auth';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
      <Grid
        container
        xs="12"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1>やまぐちめぐり</h1>
        <Switch>
            <Route exact path="/" component={GoogleMapComponent} />
            <Route exact path="/check-in" component={CheckinComponent} />
        </Switch>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
