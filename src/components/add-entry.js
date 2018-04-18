import React from 'react';
import { connect } from 'react-redux';
import { postEntry } from '../actions/entryActions.js';

export class AddEntry extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const caption = event.target.caption.value;
    const values = {
      caption
    }
    console.log(caption);
    this.props.dispatch(postEntry(values));
  }

  handlePhotoUpload() {

    // const photo = files[0];
    // console.log(photo);
  }

  render() {
    return (
        <div className="entry">
          <form id="entry-form" onSubmit={(event) => this.onSubmit(event)}>
            <div className="form-section">
              <label forhtml="photo">Upload Photo</label>
              <input type="file" name="photo" onChange={this.handlePhotoUpload} required />
            </div>
            <div className="form-section">
              <label forhtml="caption">Caption</label>
              <textarea name="caption" rows="2" required></textarea>
            </div>
            <button type="submit">Post</button>
        </form>
        </div>
    );
  }
}

export default connect()(AddEntry);
