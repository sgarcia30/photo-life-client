import React from 'react';
import { connect } from 'react-redux';
import { getEntries, deleteEntry, editEntry, editCaption } from '../actions/entryActions.js';
import {API_BASE_URL} from '../config.js';
import moment from 'moment';
import './feed.css';

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
    const allEntries = this.props.entries.map((entry, index) => {
      return (
        <li key={index} className="entry">
          <img className="entry-image" src={`${API_BASE_URL}${entry.photo}`} alt="entry"/>
          <div className='entry-details'>
            <div className='caption-date'>
              <p className='caption'>{entry.caption}</p>
              <p className='date'><i>{moment(new Date(entry.date)).format('ddd MMM DD YYYY')}</i></p>
            </div>
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
            <button className='edit' onClick={() => {
              this.props.dispatch(editEntry(entry._id))
            }}>{entry.editable ? "Cancel" : "Edit"}</button>
            <button className='delete' onClick={() => this.onClick(entry._id)}>Delete</button>
            <div className="spacer"></div>
          </div>
        </li>
    )})
    return (
        <div className="feed">
          <ul>
            {allEntries}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries,
});

export default connect(mapStateToProps)(Feed);
