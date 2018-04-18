import {API_BASE_URL} from '../config';

export const postEntry = (values) => dispatch => {
  const authToken = localStorage.getItem('authToken');
  const userId = localStorage.getItem('userId');
    fetch(`${API_BASE_URL}/api/entries`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({
        caption: values.caption,
        userId
      })
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(response => {
          console.log(response)
          console.log("it's done!")
        });
};

export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const getPhotoSuccess = entries => ({
    type: GET_PHOTO_SUCCESS,
    entries
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
          console.log(entries)
          dispatch(getPhotoSuccess(entries))
        });
};
