import React from 'react'

import { connect } from 'react-redux'
import { setVisa } from '../../store/actions/postsActions'

class VisaPage extends React.Component {
	//
	state = {
		remarques: ''
	}

	onPublishHandler = e => {
		const visa = {
			...this.state,
			post_id: this.props.match.params.id
		}
		//
		this.props.onSetVisa(visa)

		this.props.history.push('/sujets')
	}

	onChangeHandler = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	onDeleteHandler = e => {
		this.setState({
			remarques: ''
		})
	}

	//
	render() {
		const postId = this.props.match.params.id

		return (
			<div className="container">
				<div className="row">
					<div className="col s12">
						<div className="white card z-depth-1">
							<div className="card-content">
								<span className="card-title center grey-text darken-2">
									Post Id: {postId}
								</span>

								<form>
									<div className="row">
										<div className="input-field col s12">
											<i className="material-icons prefix">mode_edit</i>
											<textarea
												id="remarques"
												value={this.state.remarques}
												onChange={this.onChangeHandler}
												className="materialize-textarea validate"
												required
											/>
											<label htmlFor="remarques">Remarques</label>
										</div>
									</div>
								</form>
							</div>

							<div className="card-action">
								<a
									className="btn-floating waves-effect waves-light btn"
									onClick={this.onPublishHandler}
								>
									<i className="material-icons">publish</i>
								</a>

								<a
									className="btn-floating waves-effect waves-light red btn"
									onClick={this.onDeleteHandler}
								>
									<i className="material-icons">delete</i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProp = dispatch => {
	return {
		onSetVisa: visa => dispatch(setVisa(visa))
	}
}

export default connect(
	null,
	mapDispatchToProp
)(VisaPage)
