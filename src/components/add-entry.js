import React from 'react';
import { connect } from 'react-redux';
import { postEntry } from '../actions/entryActions.js';
import FormData from 'form-data';
import Modal from 'react-modal';
import './add-entry.css';

export class AddEntry extends React.Component {
  constructor() {
      super();

      this.state = {
        modalIsOpen: false
      };

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  onSubmit(event) {
    event.preventDefault();
    let photo = new FormData();
    photo.append('file', event.target.file.files[0]);
    photo.append('caption', event.target.caption.value);
    this.props.dispatch(postEntry(photo));
    event.target.file.value = '';
    event.target.caption.value = '';
    this.closeModal();
  }

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

export default connect()(AddEntry);
