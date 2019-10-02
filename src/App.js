import React,{Component} from 'react';
import HomePage from './pages/homePage/homePageComponent'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shopComponent'
import Header from './components/header/headerComponent'
import  SignInSignOutPage  from './pages/signInAndSignOut/signInAndSignOutComponent'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
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
    this.unSubscribeFromAuth =  auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef =await createUserProfileDocument(userAuth) 

        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          },
          ()=>console.log(this.state))
        })
      }else{
        this.setState({currentUser:userAuth})
      }
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
