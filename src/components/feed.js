import React from 'react';
import { connect } from 'react-redux';
import { getEntries, deleteEntry, editEntry, editCaption } from '../actions/entryActions.js';
import {API_BASE_URL} from '../config.js';

export class Feed extends React.Component {
  componentDidMount() {
    this.props.dispatch(getEntries())
  }
  onClick(postId) {
    this.props.dispatch(deleteEntry(postId));
  }
  onSubmit(event, postId) {
    event.preventDefault();
    const updatedCaption = event.target.editCaption.value;
    this.props.dispatch(editCaption(updatedCaption, postId));
  }

  render() {
    const entries = this.props.entry.map((entry, index) => {
      return (
        <li key={index} className="entry">
          <img src={`${API_BASE_URL}${entry.photo}`} alt="entry"/>
          <p>{entry.caption}</p>
          <p>{entry.date}</p>
          {
            entry.editable ?
            <form id="edit-form" onSubmit={(event) => this.onSubmit(event, entry._id)}>
              <div className="form-section">
                <label forhtml="editCaption">Caption</label>
                <textarea name="editCaption" rows="2"></textarea>
              </div>
              <button type="submit">Update</button>
            </form>
            : ''
          }
          <button onClick={() => {
            this.props.dispatch(editEntry(entry._id))
          }}>{entry.editable ? "Cancel" : "Edit"}</button>
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
