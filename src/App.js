
import './App.css';
import React, {useEffect} from 'react';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Shop from './Shop';
import Header from './Header';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import Cart from './Cart';
import Header_new from './Header_new';
import MainCTA from './MainCTA';
import Trending from './Trending';
import Brands from './Brands';
import Sections from './Sections';
import Admin from './Admin';
import Men from './Men';
import HeaderUpdated from './HeaderUpdated';
import ProductDetailed from './ProductDetailed';
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log("User is>" , authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser,
        });
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null,
        });

      }
    })
  }, [])
  return (
    
    <Router>
    <div className="app">
      <Switch>
        <Route path='/product-details'>
        <HeaderUpdated />
          <ProductDetailed />
        </Route>
        <Route path='/men'>
          <HeaderUpdated />
          <Men />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      <Route path="/test">
      <Header_new />
      <MainCTA />
      <Trending />
      <Brands />
      <Sections />
      </Route>
      <Route path="/cart">
      <Header />
        <Cart />
          </Route>
      <Route path="/user-register">
        <UserRegister />
          </Route>
      <Route path="/user-login">
        <UserLogin />
          </Route>
         <Route path="/shop">
         <Header />
           <Shop />
          </Route>
          <Route path="/">
          <HeaderUpdated />
      <MainCTA />
      <Trending />
      <Brands />
      <Sections />
          </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
