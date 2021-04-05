import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './Home'
import FeatureProducts from './FeatureProducts'
import AboutUs from './AboutUs'
import HowToUse from './HowToUse'


class Navbar extends Component {
    render() {
      return (
        <BrowserRouter>
        <Switch>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 style={{textAlign: "center", color: 'red'}}>Oneshop |</h1>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/about_us">About Us</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/feature_products">Feature Products</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/how_to_use">How to Use</Link>
                </li>
              </ul>
            </div>
          </nav>
          </Switch>
          <Route path='/home'><Home /></Route>
          <Route path='/about_us'><AboutUs /></Route>
          <Route path='/feature_products'><FeatureProducts /></Route>
          <Route path='/how_to_use'><HowToUse /></Route>
        </BrowserRouter>      
      )
    }
}

export default Navbar;