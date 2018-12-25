import {
	GET_NOTIFICATIONS_ERROR,
	GET_NOTIFICATIONS_SUCCESS,
	INIT_NOTIFICATIONS
} from '../types/actionsTypes'

const initState = {
	notifications: [],
	error: ''
}

const notificationsReducer = (state = initState, action) => {
	switch (action.type) {
		//
		case INIT_NOTIFICATIONS: {
			return {
				notifications: [],
				error: ''
			}
		}
		//
		case GET_NOTIFICATIONS_ERROR: {
			return {
				...state,
				error: action.payload
			}
		}
		//
		case GET_NOTIFICATIONS_SUCCESS: {
			return {
				...state,
				error: '',
				notifications: [...state.notifications, action.payload]
			}
		}

		//
		default:
			return state
	}
}

export default notificationsReducer
