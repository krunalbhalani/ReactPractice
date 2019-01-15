import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import reducer from './reducer-movies.js';
import SelectedMovieReducer from './reducer-selected-movie';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    movies:reducer,
    movie:SelectedMovieReducer
});

export default allReducers
