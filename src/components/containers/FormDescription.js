import React from 'react'

class FormDescription extends React.Component {
	state = {
		first_name: '',
		last_name: '',
		description: '',
		errors: ''
	}

	validateForm() {
		if (this.state.first_name.trim() === '') {
			this.setState({
				errors: 'Veuillez saisir votre nom de famille !',
				first_name: ''
			})
			return false
		}
		//
		if (this.state.last_name.trim() === '') {
			this.setState({
				errors: 'Veuillez saisir votre prénom !',
				last_name: ''
			})
			return false
		}
		//
		if (this.state.description.trim() === '') {
			this.setState({
				errors: 'Veuillez saisir une description !',
				description: ''
			})
			return false
		}

		return true
	}

	onChangeHandler = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	onPublishHandler = e => {
		if (this.validateForm()) {
			this.setState({
				errors: ''
			})

			const item = {
				first_name: this.state.first_name.trim(),
				last_name: this.state.last_name.trim(),
				description: this.state.description.trim()
			}
			this.props.onFormData(item)
		}
	}

	onDeleteHandler = e => {
		this.setState({
			description: '',
			errors: ''
		})
	}

	//
	render() {
		return (
			<div className="col s12">
				<div className="white card z-depth-1">
					<div className="card-content">
						<span className="card-title center grey-text darken-2">
							Décrire brièvement vos actions de la semaine.
						</span>

						<form>
							<div className="row">
								<div className="input-field col s6">
									<input
										className="validate"
										value={this.state.first_name}
										onChange={this.onChangeHandler}
										id="first_name"
										type="text"
										required
									/>
									<label htmlFor="first_name">Nom</label>
								</div>

								<div className="input-field col s6">
									<input
										className="validate"
										value={this.state.last_name}
										onChange={this.onChangeHandler}
										id="last_name"
										type="text"
										required
									/>
									<label htmlFor="last_name">Prénom</label>
								</div>
							</div>

							<div className="row">
								<div className="input-field col s12">
									<i className="material-icons prefix">mode_edit</i>
									<textarea
										id="description"
										className="materialize-textarea validate"
										placeholder="Vos actions ..."
										value={this.state.description}
										onChange={this.onChangeHandler}
										required
									/>
									<label htmlFor="description">Descriptions</label>
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
						<span className="red-text darken-4">{this.state.errors}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default FormDescription
