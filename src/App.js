import React,{Component} from 'react';
import HomePage from './pages/homePage/homePageComponent'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shopComponent'
import Header from './components/header/headerComponent'
import  SignInSignOutPage  from './pages/signInAndSignOut/signInAndSignOutComponent'
import {auth} from './firebase/firebase.utils'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser:null
    }
  }
  unSubscribeFromAuth = null
  componentDidMount(){
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user);
    } )
  }

  componentWillUpdate(){
    this.unSubscribeFromAuth();
  }




  render(){
    return (
      <div >
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path ='/' component = {HomePage} />
          <Route path ='/shop' component = {ShopPage} />
          <Route path = '/signin' component = {SignInSignOutPage} /> 
        </Switch>
      </div>
    );
  } 
}

export default App;
