import React from 'react'

import CardConnexion from '../containers/CardConnexion'

class HomePage extends React.Component {
	componentWillMount() {}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col s12">
						<CardConnexion />
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage
