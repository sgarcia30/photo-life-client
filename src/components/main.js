import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './landing-page.js'
import Login from './login.js';
import HomePage from './home-page.js';

// Main component
export default function Main() {
  // Routes the LandingPage, Login, and HomePage components
    return (
      <Router>
        <div className="main">
            <main>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/home' component={HomePage} />
            </main>
        </div>
      </Router>
    );
}
