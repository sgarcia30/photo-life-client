import React from 'react';
import { connect } from 'react-redux';
import { getEntries, deleteEntry, editEntry } from '../actions/entryActions.js';
import {API_BASE_URL} from '../config.js';

export class Feed extends React.Component {
  componentDidMount() {
    this.props.dispatch(getEntries())
  }
  onClick(postId) {
    this.props.dispatch(deleteEntry(postId));
  }

  render() {
    const entries = this.props.entry.map((entry, index) => {
      return (
        <li key={index} className="entry">
          <img src={`${API_BASE_URL}${entry.photo}`} alt="entry"/>
          <p>{entry.caption}</p>
          <p>{entry.date}</p>
          <button onClick={() => {
            console.log(entry._id);
            this.props.dispatch(editEntry(entry._id))
          }}>Edit</button>
          <button onClick={() => this.onClick(entry._id)}>Delete</button>
        </li>
    )})
    return (
        <div className="feed">
          <ul>
            {entries}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.entry,
});

export default connect(mapStateToProps)(Feed);
