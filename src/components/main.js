import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './landing-page.js'

export default function Main() {
    return (
      <Router>
        <div className="main">
            <Route path='/' component={Navbar} />
            <main>
                <Route exact path='/photo-life' component={LandingPage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/home' component={HomePage} />
            </main>
        </div>
      </Router>
    );
}
