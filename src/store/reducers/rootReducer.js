import { combineReducers } from 'redux'

import authReducer from './authReducer'
import sujetsReducer from './sujetsReducer'
import postReducer from './postsReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	sujets: sujetsReducer,
	posts: postReducer
})

export default rootReducer
