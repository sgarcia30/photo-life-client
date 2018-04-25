import * as actions from '../actions/entryActions.js';

const initialState = {
  email: "jdoe@gmail.com",
  firstName: 'Jane',
  lastName: 'Doe',
  entry: [{
    img: "img-link",
    caption: "this photo is awesome"
  }],
  card: [{
    title: "Capture your life in photos",
    cardInfo: "PhotoLife allows users to journal life through photos. Users can make entries daily, weekly, or as often as you like."
  },
  {
    title: "Categorize your journal entries",
    cardInfo: "Each photo entry can be captioned and categorized for searchability. PhotoLife allows users to search and view their entries by date or by category."
  },
  {
    title: "Share your entries",
    cardInfo: "Share each of your entries with a select group of friends or family or only share specific entries. PhotoLife is customizeable for sharing to ensure your entries are only shared as desired."
  }]
};

export const Reducer = (state = initialState, action) => {
  if (action.type === actions.GET_PHOTO_SUCCESS) {
    const sortedEntries = action.entries.sort((a,b) => {
    if(a.date < b.date) {
      return 1
    }
    if(a.date > b.date) {
      return -1
    }
      return 0
    })
    return Object.assign({}, state, {
      entry: sortedEntries
    })
  }
  else if (action.type === actions.EDIT_ENTRY) {
    const editedEntries = state.entry.map(entry => {
      if(entry._id === action.entryId) {
        // please explain this... I'm lost
        return {
          ...entry,
          editable: true
        }
      }
      return {
        ...entry
      }
    })
    return Object.assign({}, state, {
      entry: editedEntries
    })
  }
  return state;
}
