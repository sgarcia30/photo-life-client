import {API_BASE_URL} from '../config';

// Sync action to set state of the entries
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const getPhotoSuccess = entries => ({
    type: GET_PHOTO_SUCCESS,
    entries
});

// Sync action to set state of the entry ID
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const editEntry = entryId => ({
    type: EDIT_ENTRY,
    entryId
});

// Sync action to set state of the search value
export const SEARCH_POSTS = 'SEARCH_POSTS';
export const searchPosts = searchVal => ({
    type: SEARCH_POSTS,
    searchVal
});

// Asyn post action for the user to make a journal entry
export const postEntry = (photo) => dispatch => {
  const authToken = localStorage.getItem('authToken');
  const userId = localStorage.getItem('userId');
    fetch(`${API_BASE_URL}/api/entries/${userId}`, {
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

// Async put action to update a caption for an entry
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

// Async get action to get a users entries
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
          if (entries.length > 0) {
            dispatch(getPhotoSuccess(entries))
          }
        })
        .catch(err => console.log(err))
};

// Async delete action to delete a specific entry
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
