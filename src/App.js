import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Solid from "./Components/Solid/Solid";
import Liquid from "./Components/Liquid/Liquid";
import Logout from './Components/Logout/Logout';
import MedicineDetails from "./Components/Details/MedicineDetails";
import Cart from './Components/Cart/Cart';

class App extends Component {

  render() {
      var najaven = localStorage.getItem('username');
      var routes;
      if(!najaven) {
           routes = (
              <BrowserRouter>
                  <Route path="/" exact component={Home}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/signup" component={SignUp}/>
              </BrowserRouter>
          );
      } else {
           routes = (
              <BrowserRouter>
                  <Route path="/" exact component={Home}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/logout" component={Logout}/>
                  <Route path="/signup" component={SignUp}/>
                  <Route path="/cart" component={Cart}/>
                  <Route path="/solid" component={Solid}/>
                  <Route path="/liquid" component={Liquid}/>
                  <Route path="/details/:name" component={MedicineDetails}/>
              </BrowserRouter>
          );
      }


    return (
        <div>  {routes} </div>

    );
  }
}
export default App;
