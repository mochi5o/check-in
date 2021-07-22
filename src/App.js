import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GoogleMapComponent from './GoogleMapComponent';
import Checkin from './Checkin'
import { Container, Grid } from '@material-ui/core';

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
        <h1>特産物スタンプラリー</h1>
        <Switch>
          <Route exact path="/" component={GoogleMapComponent} />
          <Route exact path="/check-in" component={Checkin} />
        </Switch>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
