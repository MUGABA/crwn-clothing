import React from 'react';
import HomePage from './pages/homePage/homePageComponent'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shopComponent'
import './App.css';


function App() {
  return (
    <div >
      <Switch>
        <Route exact path ='/' component = {HomePage} />
        <Route path ='/shop' component = {ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
