import { combineReducers } from 'redux'

import authReducer from './authReducer'
import sujetsReducer from './sujetsReducer'
import postReducer from './postsReducer'
import notificationsReducer from './notificationsReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	sujets: sujetsReducer,
	posts: postReducer,
	notifications: notificationsReducer
})

export default rootReducer
