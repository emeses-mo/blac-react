
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
            <Header />
            <Home />
          </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
