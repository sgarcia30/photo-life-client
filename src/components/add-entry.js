import React from 'react';
import { connect } from 'react-redux';
import { postEntry } from '../actions/entryActions.js';
import FormData from 'form-data';
import './add-entry.css';

export class AddEntry extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    let photo = new FormData();
    photo.append('file', event.target.photo.files[0]);
    const caption = event.target.caption.value;
    this.props.dispatch(postEntry(photo, caption));
    event.target.photo.value = '';
    event.target.caption.value = '';
  }

  render() {
    return (
        <div className="post-area">
          <form id="entry-form" onSubmit={(event) => this.onSubmit(event)}>
            <div className="form-section">
              <label htmlFor="file">Upload Photo</label>
              <input id='file-upload' type="file" name="file" required />
            </div>
            <div className="form-section">
              <label forhtml="caption">Caption</label>
              <textarea name="caption" rows="2"></textarea>
            </div>
            <button id='submit' type="submit">Post</button>
          </form>
        </div>
    );
  }
}

export default connect()(AddEntry);
