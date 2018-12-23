import {
	INIT_POSTS,
	ADD_NEW_POST_ERROR,
	ADD_NEW_POST_SUCCESS,
	GET_POST_ERROR,
	GET_POST_SUCCESS,
	SET_VISA_ERROR,
	SET_VISA_SUCCESS
} from '../types/actionsTypes'

const initState = {
	posts: [],
	error: ''
}

const postReducer = (state = initState, action) => {
	//
	switch (action.type) {
		//
		case INIT_POSTS: {
			return {
				...state,
				posts: []
			}
		}
		//
		case GET_POST_ERROR: {
			return {
				...state,
				error: action.payload
			}
		}
		//
		case GET_POST_SUCCESS: {
			return {
				...state,
				error: '',
				posts: [...state.posts, action.payload]
			}
		}
		//
		case ADD_NEW_POST_SUCCESS: {
			return {
				...state,
				error: ''
			}
		}

		//
		case ADD_NEW_POST_ERROR: {
			return {
				...state,
				error: action.payload
			}
		}

		//
		case SET_VISA_SUCCESS: {
			return {
				...state,
				error: ''
			}
		}

		//
		case SET_VISA_ERROR: {
			return {
				...state,
				error: action.payload
			}
		}
		//
		default:
			return state
	}
}

export default postReducer
