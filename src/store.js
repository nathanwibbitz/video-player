import { createStore } from 'redux';
import { videoActionsReducer } from './reducers/video-actions';

const store = createStore(videoActionsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;