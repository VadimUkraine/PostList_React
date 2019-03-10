import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import postsReducer from './store/reducers/postsReducer';
import selectedReducer from './store/reducers/selectReducer';
import getComments from './store/reducers/commentsReducer';
import postsStateReducer from './store/reducers/postsStateReducer';
import searchReducer from './store/reducers/searchReducer';
import errorPostsReducer from './store/reducers/errorPostsReducer';
import errorSelectReducer from './store/reducers/errorSelectReducer';

const rootReducer = combineReducers({
	posts: postsReducer,
	select: selectedReducer,
	comments: getComments,
	showPosts: postsStateReducer, 
	search: searchReducer,
	errorPosts: errorPostsReducer,
	errorSelect: errorSelectReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
