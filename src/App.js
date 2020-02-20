import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Favourites from './Components/Favourites/Favourites';
import Logout from './Components/Logout/Logout';


class App extends Component {

  render() {
      //debugger;
      var najaven = localStorage.getItem('username');
        var routes;
      if(!najaven) {
           routes = (
              <BrowserRouter>
                  <Route path="/" exact component={Home}/>
                  <Route path={"/home"} component={Home}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/signup" component={SignUp}/>
              </BrowserRouter>
          );
      } else {
           routes = (
              <BrowserRouter>
                  <Route path="/" exact component={Home}/>
                  <Route path={"/home"} component={Home}/>
                  <Route path="/logout" component={Logout}/>
                  <Route path="/signup" component={SignUp}/>
                  <Route path={"/favourites"} component={Favourites}/>
              </BrowserRouter>
          );
      }


    return (
        <div>  {routes} </div>

    );
  }
}
export default App;
