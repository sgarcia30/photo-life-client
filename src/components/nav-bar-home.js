import React from 'react';
import { connect } from 'react-redux';
import { searchPosts, getEntries } from '../actions/entryActions.js';
import './nav-bar-home.css';

// NavbarHome component
export class NavbarHome extends React.Component {
  // onChange function that dispatches either the 'getEntries' or 'searchPosts'
  // action to live search the users feed for an entry based on the caption
  onChange() {
    const searchVal = this.input.value;
    if (searchVal.trim() === '') {
      this.props.dispatch(getEntries());
    }
    this.props.dispatch(searchPosts(searchVal))
  }

// Renders the NavbarHome component
  render() {
    return (
        <div className="nav">
          <nav>
            <img className='logo' src="/logo-camera-green-blue.png" alt="camera logo"></img>
            <h2>PhotoLife</h2>
            <div className='nav-stuff'>
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
            </div>
          </nav>
        </div>
    )
  }
}

// Connect the NavbarHome component to the store
export default connect()(NavbarHome);
