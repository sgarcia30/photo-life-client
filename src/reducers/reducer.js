import * as actions from '../actions/entryActions.js';

const initialState = {
  entries: [{
    img: "img-link",
    caption: "this photo is awesome"
  }],
  card: [{
    title: "Capture your life in photos",
    cardInfo: "PhotoLife allows users to journal life through photos. Users can make entries daily, weekly, or as often as you like."
  },
  {
    title: "Categorize your journal entries",
    cardInfo: "Each photo entry can be captioned for searchability. PhotoLife allows users to search and view their entries by caption."
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
      entries: sortedEntries
    })
  }
  else if (action.type === actions.EDIT_ENTRY) {
    const editedEntries = state.entries.map(entry => {
      if(entry._id === action.entryId) {
        return {
          ...entry,
          editable: !entry.editable
        }
      }
      return {
        ...entry
      }
    })
    return Object.assign({}, state, {
      entries: editedEntries
    })
  }
  else if (action.type === actions.SEARCH_POSTS) {
    const searchVal = action.searchVal.toLowerCase();
    let searchMatches = state.entries.filter(entry => {
      let lowCaseCaption = entry.caption.toLowerCase();
      return lowCaseCaption.includes(searchVal);
    })
    return Object.assign({}, state, {
      entries: searchMatches
    })
  }
  return state;
}

// const searchLength = searchVal.length;
// let shortCaption = lowCaseCaption.substring(0, Math.min(lowCaseCaption.length, searchLength));
