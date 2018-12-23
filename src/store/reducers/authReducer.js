import {
	CONNECT_GOOGLE_SUCCESS,
	CONNECT_GOOGLE_ERROR,
	LOGOUT_SUCCESS,
	LOGOUT_ERROR
} from '../types/actionsTypes'

const initState = {
	user: null,
	error: null,
	isLogin: false
}

const authReducer = (state = initState, action) => {
	//
	switch (action.type) {
		//
		case CONNECT_GOOGLE_SUCCESS: {
			return {
				user: action.payload,
				error: null,
				isLogin: true
			}
		}
		//
		case CONNECT_GOOGLE_ERROR: {
			return {
				user: null,
				error: action.payload,
				isLogin: false
			}
		}
		//
		case LOGOUT_SUCCESS: {
			return {
				user: null,
				error: null,
				isLogin: false
			}
		}
		//
		case LOGOUT_ERROR: {
			return {
				user: state.user,
				error: action.payload,
				isLogin: false
			}
		}
		//
		default:
			return state
	}
}

export default authReducer
