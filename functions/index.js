const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// exports.helloWorld = functions.https.onRequest((request, response) => {
// 	response.send('Application web pour le suivi des projets tutores')
// })

const createNotification = notification => {
	return admin
		.firestore()
		.collection('notifications')
		.add(notification)
		.then(doc => {
			console.log('notification created', notification)
		})
}

exports.postCreated = functions.firestore
	.document('posts/{postId}')
	.onCreate(doc => {
		const post = doc.data()

		const notification = {
			id: post.id,
			content: post.sujet_name,
			user: `${post.first_name} ${post.last_name}`,
			time: admin.firestore.FieldValue.serverTimestamp()
		}
		return createNotification(notification)
		//
	})
