import React from 'react';

export default function AddEntry() {
    return (
        <div className="entry">
          <form id="entry-form">
            <div class="form-section">
              <label forhtml="photo">Upload Photo</label>
              <input type="file" name="photo" placeholder="Photo goes here..." required />
            </div>
            <button type="browse">Browse</button>
            <div class="form-section">
              <label forhtml="caption">Caption</label>
              <textarea name="caption" rows="2" required></textarea>
            </div>
            <button type="submit">Post</button>
        </form>
        </div>
    );
}
