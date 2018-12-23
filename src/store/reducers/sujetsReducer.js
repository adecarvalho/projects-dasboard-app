import { GET_SUJETS, INIT_SUJETS } from '../types/actionsTypes'

const initState = {
	sujets: []
}

const sujetsReducer = (state = initState, action) => {
	switch (action.type) {
		//
		case INIT_SUJETS: {
			return {
				...state,
				sujets: []
			}
		}
		//
		case GET_SUJETS:
			return {
				...state,
				sujets: [...state.sujets, action.payload]
			}
		//
		default:
			return state
	}
}

export default sujetsReducer
