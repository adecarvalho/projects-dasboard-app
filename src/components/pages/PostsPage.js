import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import CardDescription from '../containers/CardDescription'

import { initPosts, addNewPost } from '../../store/actions/postsActions'

class PostsPage extends React.Component {
	//
	componentWillMount() {
		this.props.onInitPosts()
	}
	//
	onCreateNewPost = datas => {
		if (datas) {
			const { id, image } = this.props.user
			const newpost = {
				...datas,
				author_id: id,
				author_image: image,
				visa: false,
				remarques: ''
			}
			//
			this.props.onAddNewPost(newpost)
		}
	}

	render() {
		const { islogin, sujet, user } = this.props

		if (!islogin) {
			return <Redirect to="/" />
		}

		return (
			<div className="fluid">
				<CardDescription
					isAdmin={user.isAdmin}
					sujet={sujet}
					onCreateNewPost={this.onCreateNewPost}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id

	const sujet_tab = state.sujets.sujets.filter(item => {
		return item.id === id
	})

	let sujet = {}

	if (sujet_tab.length > 0) {
		sujet = sujet_tab[0]
	} else {
		sujet = {}
	}

	return {
		islogin: state.auth.isLogin,
		id: id,
		sujet: sujet,
		user: state.auth.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddNewPost: post => dispatch(addNewPost(post)),
		onInitPosts: () => dispatch(initPosts())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostsPage)
