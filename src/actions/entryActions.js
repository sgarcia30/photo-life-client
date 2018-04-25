import {API_BASE_URL} from '../config';

export const postEntry = (photo, caption) => dispatch => {
  const authToken = localStorage.getItem('authToken');
  const userId = localStorage.getItem('userId');
    fetch(`${API_BASE_URL}/api/entries/${userId}/${caption}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`
      },
      body: photo
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(response => {
          dispatch(getPhotoSuccess(response.entries));
        });
};

export const editCaption = (updatedCaption, postId) => dispatch => {
  const authToken = localStorage.getItem('authToken');
  const userId = localStorage.getItem('userId');
    fetch(`${API_BASE_URL}/api/entries/${userId}/${postId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({
        caption: updatedCaption
      })
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(response => {
          dispatch(getPhotoSuccess(response.entries));
        });
};

export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const getPhotoSuccess = entries => ({
    type: GET_PHOTO_SUCCESS,
    entries
});

export const EDIT_ENTRY = 'EDIT_ENTRY';
export const editEntry = entryId => ({
    type: EDIT_ENTRY,
    entryId
});

export const getEntries = () => dispatch => {
  const authToken = localStorage.getItem('authToken');
  const userId = localStorage.getItem('userId');
    fetch(`${API_BASE_URL}/api/entries/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(entries => {
          dispatch(getPhotoSuccess(entries))
        })
        .catch(err => console.log(err))
};

export const deleteEntry = (postId) => dispatch => {
  const authToken = localStorage.getItem('authToken');
  const userId = localStorage.getItem('userId');
    fetch(`${API_BASE_URL}/api/entries/${userId}/${postId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(entries => {
          dispatch(getPhotoSuccess(entries))
        });
};
