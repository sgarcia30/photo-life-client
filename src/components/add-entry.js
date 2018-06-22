import React from 'react';
import { connect } from 'react-redux';
import { postEntry } from '../actions/entryActions.js';
import FormData from 'form-data';
import Modal from 'react-modal';
// import {ImageDataURI} from 'image-data-uri';
import './add-entry.css';

//AddEntry component
export class AddEntry extends React.Component {
  // Constructor and props set-up to use state to user 'react-modal'
  constructor() {
      super();
      this.state = {
        modalIsOpen: false
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.createDataURI = this.createDataURI.bind(this);
  }

// function to open the modal
  openModal() {
    this.setState({modalIsOpen: true});
  }

// function to close the modal
  closeModal() {
    this.setState({modalIsOpen: false});
  }

// on submit function to dispatch async action to post journal entry
  onSubmit(event) {
    event.preventDefault();
    this.createDataURI(event.target.file.files[0], event.target.caption.value);
    event.target.file.value = '';
    event.target.caption.value = '';
    this.closeModal();
  }

createDataURI(file, caption) {
    const  reader = new FileReader();

    if(file.size > 500000) {
      alert('File Size must be less than .5 megabytes');
      return false;
    } // eslint-disable-line no-alert

    reader.addEventListener('load', () => {
      console.log(reader.result, 'reader.result');
      let photo = new FormData();
      photo.append('file', reader.result);
      photo.append('caption', caption);
      this.props.dispatch(postEntry(photo));
    }, false);

    if(file) {
      reader.readAsDataURL(file);
    }
};

// Render AddEntry component
  render() {
    return (
        <div className="post-area">
          <button id='journal-modal' onClick={this.openModal}>Journal</button>
          <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Journal Modal"
          className="journalModal"
          overlayClassName="journalOverlay"
          ariaHideApp={false}
          >
            <form id="entry-form" onSubmit={(event) => this.onSubmit(event)}>
              <div className="form-section">
                <label id='uploadLabel' htmlFor="file">+ Upload Photo</label>
                <input id='file' type="file" name="file" required />
              </div>
              <div className="form-section">
                <label id='captionlabel' forhtml="caption">Caption</label>
                <textarea name="caption" rows="2"></textarea>
              </div>
              <button id='submit' type="submit">Post</button>
              <button id='closeModal' onClick={this.closeModal}>Cancel</button>
            </form>
          </Modal>
        </div>
    );
  }
}

// Connect AddEntry component to the store
export default connect()(AddEntry);
