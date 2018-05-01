import React from 'react';
import { connect } from 'react-redux';
import { searchPosts, getEntries } from '../actions/entryActions.js';
import './nav-bar-home.css';

export class NavbarHome extends React.Component {
  onChange() {
    const searchVal = this.input.value;
    if (searchVal.trim() === '') {
      this.props.dispatch(getEntries());
    }
    this.props.dispatch(searchPosts(searchVal))
  }

  render() {
    return (
        <div className="nav">
          <nav>
            <img src="../images/logo-camera.png" width="50" height="50" alt="camera logo"></img>
            <h2>PhotoLife</h2>
            <ul className="nav-components">
              <form id="searchForm">
                <li><input type='text' placeholder='Search Entries' ref={input => this.input = input} onChange={() => this.onChange()}/></li>
              </form>
              <li onClick={() => {
                localStorage.clear();
                window.location = '/login';
              }}>
              <button id='logout'>Logout</button></li>
            </ul>
          </nav>
        </div>
    )
  }
}

export default connect()(NavbarHome);
