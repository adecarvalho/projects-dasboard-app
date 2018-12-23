import React from 'react'
import FormDescription from './FormDescription'
import { connect } from 'react-redux'
import PostsList from '../containers/PostsList'

import { getPostsBySujetId } from '../../store/actions/postsActions'

class CardDescription extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			toggle: false,
			sujet_name: props.sujet.name,
			sujet_id: props.sujet.id
		}
	}

	componentWillMount() {
		this.props.onGetPostBySujetId(this.state.sujet_id)
	}

	//

	onFormData = datas => {
		this.setState({
			toggle: false
		})
		//
		if (datas) {
			const newpost = {
				...datas,
				sujet_name: this.state.sujet_name,
				sujet_id: this.state.sujet_id
			}
			this.props.onCreateNewPost(newpost)
		}
	}

	toggleHandler = e => {
		this.setState({
			toggle: !this.state.toggle
		})
	}

	afficheTitre(sujet) {
		return sujet ? (
			<h4 className="center grey-text darken-2">
				Projet Tutoré {sujet.name}
				<a
					onClick={this.toggleHandler}
					className="btn-floating btn-large waves-effect waves-light"
				>
					<i className="material-icons">edit</i>
				</a>
			</h4>
		) : (
			<h4>Loading...</h4>
		)
	}

	afficheForm(toggle) {
		return toggle ? <FormDescription onFormData={this.onFormData} /> : null
	}

	//
	render() {
		const { sujet, isAdmin } = this.props

		return (
			<div>
				<div className="row">{this.afficheTitre(sujet)}</div>

				<div className="row">{this.afficheForm(this.state.toggle)}</div>

				<div>
					<PostsList isAdmin={isAdmin} posts={this.props.posts} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onGetPostBySujetId: id => dispatch(getPostsBySujetId(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CardDescription)
