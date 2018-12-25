import React from 'react'
import { connect } from 'react-redux'

import {
	getNotifications,
	initNotifications
} from '../../store/actions/notificationsActions'

class CardNotification extends React.Component {
	componentDidMount() {
		this.props.onInitNotifications()
		this.props.onGetNotifications()
	}

	getDate(val) {
		const options = {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		}
		const date = new Date(val * 1000)
		return date.toLocaleDateString('fr-FR', options)
	}

	//
	render() {
		const { notifications } = this.props

		return (
			<div className="card z-depth-1">
				<div className="card-content">
					<span className="card-title   center">Notifications</span>
					<ul className="online-users">
						{notifications &&
							notifications.map((item, index) => {
								return (
									<li key={item.id} className="collection-item">
										<div>
											<span>{item.user}</span>
										</div>
										<div>
											<span>{item.content}</span>
										</div>

										<div>
											<span className="grey-text">
												Posté le {this.getDate(item.time.seconds)}
											</span>
										</div>

										<hr />
									</li>
								)
							})}
					</ul>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		notifications: state.notifications.notifications
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onGetNotifications: () => dispatch(getNotifications()),
		onInitNotifications: () => dispatch(initNotifications())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CardNotification)
