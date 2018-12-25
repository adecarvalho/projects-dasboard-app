import React from 'react'

import CardConnexion from '../containers/CardConnexion'
import CardNotification from '../containers/CardNotification'

class HomePage extends React.Component {
	render() {
		return (
			<div className="fluid">
				<div className="row">
					<div className="col s12 m7">
						<CardConnexion />
					</div>

					<div className="col s12 m4 offset-m1">
						<CardNotification />
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage
