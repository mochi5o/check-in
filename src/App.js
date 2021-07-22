import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GoogleMapComponent from './GoogleMapComponent';
import Checkin from './Checkin'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>特産物スタンプラリー</h1>
        <Switch>
          <Route exact path="/" component={GoogleMapComponent} />
          <Route exact path="/check-in" component={Checkin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
