import {
	GET_NOTIFICATIONS_SUCCESS,
	GET_NOTIFICATIONS_ERROR,
	INIT_NOTIFICATIONS
} from '../types/actionsTypes'

import db from '../../config/firebase_config'

export const initNotifications = () => {
	return dispatch => {
		dispatch({
			type: INIT_NOTIFICATIONS,
			payload: null
		})
	}
}

export const getNotifications = () => {
	return dispatch => {
		let docRef = db.collection('notifications')

		docRef
			.orderBy('time', 'desc')
			.get()
			.then(res => {
				res.forEach(doc => {
					dispatch({
						type: GET_NOTIFICATIONS_SUCCESS,
						payload: doc.data()
					})
				})
			})
			.catch(erreur => {
				dispatch({
					type: GET_NOTIFICATIONS_ERROR,
					payload: erreur.message
				})
				console.log(erreur.message)
			})
	}
}
