import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import postsReducer from './reducer_posts';

const rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer,
	posts: postsReducer
})

export default rootReducer;