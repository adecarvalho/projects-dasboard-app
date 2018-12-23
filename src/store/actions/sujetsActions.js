import { GET_SUJETS, INIT_SUJETS } from '../types/actionsTypes'
import db from '../../config/firebase_config'

export const initSujets = () => {
	return dispatch => {
		dispatch({
			type: INIT_SUJETS,
			payload: null
		})
	}
}

export const getSujets = () => {
	return dispatch => {
		var docRef = db.collection('sujets')

		docRef
			.orderBy('name')
			.get()
			.then(res => {
				res.forEach(doc => {
					dispatch({
						type: GET_SUJETS,
						payload: doc.data()
					})
				})
			})
			.catch(erreur => {
				console.log(erreur.message)
			})
	}
}
