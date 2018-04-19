import React from 'react';
import { connect } from 'react-redux';
import { postEntry } from '../actions/entryActions.js';
import FormData from 'form-data';

export class AddEntry extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    let photo = new FormData();
    photo.append('file', event.target.photo.files[0]);
    // photo.append('filecaption', event.target.caption.value);
    this.props.dispatch(postEntry(photo));
  }

  render() {
    return (
        <div className="entry">
          <form id="entry-form" onSubmit={(event) => this.onSubmit(event)}>
            <div className="form-section">
              <label forhtml="photo">Upload Photo</label>
              <input type="file" name="photo" required />
            </div>
            <div className="form-section">
              <label forhtml="caption">Caption</label>
              <textarea name="caption" rows="2"></textarea>
            </div>
            <button type="submit">Post</button>
        </form>
        </div>
    );
  }
}

export default connect()(AddEntry);
