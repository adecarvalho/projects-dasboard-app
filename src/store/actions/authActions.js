import {
	CONNECT_GOOGLE_SUCCESS,
	CONNECT_GOOGLE_ERROR,
	LOGOUT_SUCCESS,
	LOGOUT_ERROR
} from '../types/actionsTypes'

import db, { firebaseAuth, provider } from '../../config/firebase_config'

export const logOut = () => {
	return dispatch => {
		firebaseAuth
			.signOut()
			.then(res => {
				dispatch({
					type: LOGOUT_SUCCESS,
					payload: null
				})
			})
			.catch(error => {
				dispatch({
					type: LOGOUT_ERROR,
					payload: error.message
				})
			})
	}
}

export const connectWithGoogle = () => {
	return dispatch => {
		firebaseAuth.signInWithPopup(provider).then(res => {
			let zeuser = {}

			if (res.user.uid) {
				zeuser = {
					id: res.user.uid,
					name: res.user.displayName,
					image: res.user.photoURL,
					isAdmin: false,
					create_at: new Date()
				}
				if (zeuser.name === 'Adelino DeCarvalho') {
					zeuser.isAdmin = true
				}
				//
				// dispatch({
				// 	type: CONNECT_GOOGLE_SUCCESS,
				// 	payload: zeuser
				// })

				return db
					.collection('users')
					.doc(res.user.uid)
					.set(zeuser)
					.then(() => {
						console.log('user created')
						dispatch({
							type: CONNECT_GOOGLE_SUCCESS,
							payload: zeuser
						})
					})
					.catch(error => {
						console.log(error.message)
						dispatch({
							type: CONNECT_GOOGLE_ERROR,
							payload: error.message
						})
					})
			}
		})
	}
}
