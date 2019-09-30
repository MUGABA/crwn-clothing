import React from 'react';
import HomePage from './pages/homePageComponent'
import { Route, Switch } from 'react-router-dom'
import './App.css';

const HatPage = () =>(
  <div>
    <h1>This is the hats page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path ='/' component = {HomePage} />
        <Route path ='/shop/hats' component = {HatPage} />
      </Switch>
    </div>
  );
}

export default App;
