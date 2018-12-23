import {
	INIT_POSTS,
	ADD_NEW_POST_SUCCESS,
	ADD_NEW_POST_ERROR,
	GET_POST_ERROR,
	GET_POST_SUCCESS,
	SET_VISA_ERROR,
	SET_VISA_SUCCESS
} from '../types/actionsTypes'

import db, { serverStamp } from '../../config/firebase_config'

export const initPosts = () => {
	return dispatch => {
		dispatch({
			type: INIT_POSTS,
			payload: null
		})
	}
}

export const addNewPost = post => {
	return dispatch => {
		const res = db.collection('posts').doc()
		//
		post.create_at = serverStamp.serverTimestamp()
		post.id = res.id

		db.collection('posts')
			.doc(res.id)
			.set(post)
			.then(res => {
				dispatch({
					type: ADD_NEW_POST_SUCCESS
				})
			})
			.catch(erreur => {
				dispatch({
					type: ADD_NEW_POST_ERROR,
					payload: erreur.message
				})
				console.log(erreur)
			})
	}
}

export const getPostsBySujetId = sujet_id => {
	return dispatch => {
		var docRef = db.collection('posts')

		docRef
			.where('sujet_id', '==', sujet_id)
			.orderBy('create_at', 'desc')
			.get()
			.then(res => {
				res.forEach(doc => {
					dispatch({
						type: GET_POST_SUCCESS,
						payload: doc.data()
					})
				})
			})
			.catch(erreur => {
				dispatch({
					type: GET_POST_ERROR,
					payload: erreur.message
				})
				console.log(erreur.message)
			})
	}
}

export const setVisa = visa => {
	return dispatch => {
		db.collection('posts')
			.doc(visa.post_id)
			.update({
				visa: true,
				remarques: visa.remarques
			})
			.then(res => {
				dispatch({
					type: SET_VISA_SUCCESS,
					payload: null
				})
			})
			.catch(erreur => {
				dispatch({
					type: SET_VISA_ERROR,
					payload: erreur.message
				})
				console.log(erreur.message)
			})
	}
}
