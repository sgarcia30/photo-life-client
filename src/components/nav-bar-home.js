import React from 'react';
import { connect } from 'react-redux';
import { searchPosts, getEntries } from '../actions/entryActions.js';

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
            <h2>PhotoLife Logo</h2>
            <ul>
              <form id="searchForm">
                <li><input type='text' placeholder='Search Entries' ref={input => this.input = input} onChange={() => this.onChange()}/></li>
              </form>
              <li onClick={() => {
                localStorage.clear();
                window.location = '/login';
              }}>
              <button>Logout</button></li>
            </ul>
          </nav>
        </div>
    )
  }
}

export default connect()(NavbarHome);
