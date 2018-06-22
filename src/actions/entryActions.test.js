import {API_BASE_URL} from '../config';
import {GET_PHOTO_SUCCESS, getPhotoSuccess, EDIT_ENTRY, editEntry, SEARCH_POSTS, searchPosts, postEntry, editCaption, getEntries, deleteEntry} from './entryActions.js';

describe('getPhotoSuccess', () => {
    it('Should return the action', () => {
        const entries = [];
        const action = getPhotoSuccess(entries);
        expect(action.type).toEqual(GET_PHOTO_SUCCESS);
        expect(action.entries).toEqual(entries);
    });
});

describe('editEntry', () => {
    it('Should return the action', () => {
        const entryId = '';
        const action = editEntry(entryId);
        expect(action.type).toEqual(EDIT_ENTRY);
        expect(action.entryId).toEqual(entryId);
    });
});

describe('searchPosts', () => {
    it('Should return the action', () => {
        const searchVal = 'random string';
        const action = searchPosts(searchVal);
        expect(action.type).toEqual(SEARCH_POSTS);
        expect(action.searchVal).toEqual(searchVal);
    });
}); 

// describe('postEntry', () => {
//     it('Should dispatch getPhotoSuccess', () => {
//       // console.log(localStorage.getItem('authToken'))
//         const response = {
//             entries: []
//         };
//         const userId = '';
//
//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true,
//                 json() {
//                     return response;
//                 }
//             })
//         );
//
//         const dispatch = jest.fn();
//         return postEntry()(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/entries/${userId}`);
//             expect(dispatch).toHaveBeenCalledWith(getPhotoSuccess(response.entries));
//         });
//     });
// });
//
// describe('editCaption', () => {
//     it('Should dispatch getPhotoSuccess', () => {
//         const response = {
//             entries: []
//         };
//         const userId = '';
//         const postId = '';
//
//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true,
//                 json() {
//                     return response;
//                 }
//             })
//         );
//
//         const dispatch = jest.fn();
//         return editCaption()(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/entries/${userId}/${postId}`);
//             expect(dispatch).toHaveBeenCalledWith(getPhotoSuccess(response.entries));
//         });
//     });
// });
//
// describe('getEntries', () => {
//     it('Should dispatch getPhotoSuccess', () => {
//         const response = {
//             entries: []
//         };
//         const userId = '';
//
//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true,
//                 json() {
//                     return response;
//                 }
//             })
//         );
//
//         const dispatch = jest.fn();
//         return getEntries()(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/entries/${userId}`);
//             expect(dispatch).toHaveBeenCalledWith(getPhotoSuccess(response.entries));
//         });
//     });
// });
//
// describe('deleteEntry', () => {
//     it('Should dispatch getPhotoSuccess', () => {
//         const response = {
//             entries: []
//         };
//         const userId = '';
//         const postId = '';
//
//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true,
//                 json() {
//                     return response;
//                 }
//             })
//         );
//
//         const dispatch = jest.fn();
//         return editCaption()(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/entries/${userId}/${postId}`);
//             expect(dispatch).toHaveBeenCalledWith(getPhotoSuccess(response.entries));
//         });
//     });
// });
