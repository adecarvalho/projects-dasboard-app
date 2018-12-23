import React from 'react'
import { Link } from 'react-router-dom'

function getDate(val) {
	const options = {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	}
	const date = new Date(val * 1000)
	return date.toLocaleDateString('fr-FR', options)
}

function afficheBadge(visa) {
	if (!visa) {
		return <span className="new badge red" />
	}
}

const afficheBtnEdition = (admin, post_id) => {
	if (admin) {
		return (
			<Link to={'/visa/' + post_id} className="waves-effect waves-light btn">
				<i className="material-icons">edit</i>
			</Link>
		)
	}
}

//
const CardPost = props => {
	const { post, isAdmin } = props

	return (
		<div className="col s12 m4">
			<div className="card white z-depth-2">
				<div className="card-content">
					<span className="card-title grey-text darken-2">
						<img
							className="avatar-image"
							src={post.author_image}
							alt="avatar"
						/>
						{post.first_name} {post.last_name}
					</span>
					<p>{post.description}</p>

					<small className="grey-text darken-1">
						Posté le {getDate(post.create_at.seconds)}
						{afficheBadge(post.visa)}
					</small>

					<hr />
					<p className="red-text">{post.remarques}</p>
				</div>
				<div className="card-action">{afficheBtnEdition(isAdmin, post.id)}</div>
			</div>
		</div>
	)
}

export default CardPost
