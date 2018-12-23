import React from 'react'
import CardPost from './CardPost'

const PostsList = ({ posts, isAdmin }) => {
	return (
		<div className="row">
			{posts &&
				posts.map((post, index) => {
					return <CardPost isAdmin={isAdmin} post={post} key={post.id} />
				})}
		</div>
	)
}

export default PostsList
