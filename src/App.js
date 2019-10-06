import React,{Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



import HomePage from './pages/homePage/homePageComponent'
import ShopPage from './pages/shop/shopComponent'
import Header from './components/header/headerComponent'
import  SignInSignOutPage  from './pages/signInAndSignOut/signInAndSignOutComponent'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/userActions'
import './App.css';


class App extends Component {
 
  unSubscribeFromAuth = null
  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth =  auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
            setCurrentUser({
                id:snapshot.id,
                ...snapshot.data()
              });
        });
      }else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUpdate(){
    this.unSubscribeFromAuth();
  }


  render(){
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path ='/' component = {HomePage} />
          <Route path ='/shop' component = {ShopPage} />
          <Route exact path = '/signin'
            render={()=>this.props.currentUser ?
            (<Redirect to = '/' />) : 
            (<SignInSignOutPage/>)}
            /> 
        </Switch>
      </div>
    );
  } 
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
