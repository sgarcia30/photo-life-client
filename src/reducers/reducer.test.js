import {Reducer} from './reducer.js';
import {getPhotoSuccess, editEntry, searchPosts} from '../actions/entryActions.js';
import moment from 'moment';

describe('authReducer', () => {
    // Set up some dummy data
    const editable1 = true;
    const editable2 = false;
    const entries1 = [{
      photo: '',
      date: '5.9.18',
      caption: 'you got it dude!',
      editable: false
    }]


    it('Should set the initial state when nothing is passed in', () => {
        const state = Reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
          entries: [{
            photo: "/welcomePhotoLife.png",
            caption: "what do your pictures say?",
            date: moment().format('ddd MMM DD YYYY')
          }],
          card: [{
            title: "Capture your life in photos",
            cardInfo: "PhotoLife allows users to journal life through photos. Users can make entries daily, weekly, or as often as you like."
          },
          {
            title: "Categorize your journal entries",
            cardInfo: "Each photo entry can be captioned for searchability. PhotoLife allows users to search and view their entries by caption."
          }]
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = Reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    // describe('getPhotoSuccess', () => {
    //     it('Should set get entries from state', () => {
    //         let state;
    //         state = Reducer(state, getPhotoSuccess(entries1));
    //         expect(state).toEqual({
    //             // not sure what to put in here
    //         });
    //     });
    // });

    // describe('editEntry', () => {
    //     it('Should edit a caption', () => {
    //         let state;
    //         state = Reducer(state, getPhotoSuccess(entries1));
    //         expect(state).toEqual({
    //             // not sure what to put in here
    //         });
    //     });
    // });

    // describe('searchPosts', () => {
    //     it('Should search entries', () => {
    //         let state;
    //         state = Reducer(state, getPhotoSuccess(entries1));
    //         expect(state).toEqual({
    //             // not sure what to put in here
    //         });
    //     });
    // });
});
