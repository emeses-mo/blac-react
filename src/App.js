
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
import Checkout from './Checkout';
import PlaceOrder from './PlaceOrder';
import Test from './Test';
import CustomerDash from './CustomerDash';
import AdminLogin from './AdminLogin';
import Women from './Women';
import Kids from './Kids';
import HomeNew from './HomeNew';
function App() {
  const [{user},dispatch] = useStateValue();
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
        <Route path='/kids'>
        <HeaderUpdated />
          <Kids />
        </Route>
        <Route path='/women'>
        <HeaderUpdated />
          <Women />
        </Route>
        <Route path='/customer-dash'>
        <HeaderUpdated />
          <CustomerDash />
        </Route>
        <Route path='/test'>
        
         <HomeNew />
        </Route>
        <Route path='/place-order'>
        <HeaderUpdated />
          <PlaceOrder />
        </Route>
        <Route path='/checkout'>
        <HeaderUpdated />
        <Checkout />
        </Route>
        <Route path='/product-details'>
        <HeaderUpdated />
          <ProductDetailed />
        </Route>
        <Route path='/men'>
          <HeaderUpdated />
          <Men />
        </Route>
        <Route path='/admin'>
          {
            user? <Admin />: <AdminLogin />
          }
          
        </Route>
      <Route path="/test">
      <Header_new />
      <MainCTA />
      <Trending />
      <Brands />
      <Sections />
      </Route>
      <Route path="/mycart">
      <HeaderUpdated />
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
