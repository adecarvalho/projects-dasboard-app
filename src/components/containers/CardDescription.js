import React from 'react'
import FormDescription from './FormDescription'
import { connect } from 'react-redux'
import PostsList from '../containers/PostsList'

import { getPostsBySujetId } from '../../store/actions/postsActions'

import img_loading from '../images/loading.gif'

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

		setTimeout(() => {
			this.setState({
				//loading: false
			})
		}, 5000)
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

	afficheTitre(sujet, loading) {
		if (loading) {
			return
		}
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

	afficheLoading(loading) {
		if (loading)
			return (
				<div className="center">
					<img src={img_loading} alt="loading" />
				</div>
			)
	}

	afficheForm(toggle, loading) {
		if (loading) {
			return
		}
		return toggle ? <FormDescription onFormData={this.onFormData} /> : null
	}

	//
	render() {
		const { sujet, isAdmin, isLoading } = this.props

		return (
			<div>
				<div className="row">{this.afficheLoading(isLoading)}</div>

				<div className="row">{this.afficheTitre(sujet, isLoading)}</div>
				<div className="row">
					{this.afficheForm(this.state.toggle, isLoading)}
				</div>

				<div>
					{!isLoading ? (
						<PostsList isAdmin={isAdmin} posts={this.props.posts} />
					) : (
						''
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts,
		isLoading: state.posts.isLoading
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
