import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

import { logOut, connectWithGoogle } from '../../store/actions/authActions'
import { getSujets, initSujets } from '../../store/actions/sujetsActions'

class NavBar extends React.Component {
	//
	logOutHandle = e => {
		this.props.onLogOut()
	}

	connectGoogleHandler = e => {
		this.props.onInitSujets()
		this.props.onGetSujets()
		this.props.onConnectWithGoogle()
	}

	afficheAvatar(user) {
		return user ? (
			<div>
				<div className="avatar-layout">
					<div>
						<img className="avatar-image" src={user.image} alt="avatar" />
					</div>

					<div className="avatar-name">
						<span>{user.name}</span>
					</div>
				</div>
			</div>
		) : null
	}

	afficheConnexion(login) {
		return !login ? (
			<a onClick={this.connectGoogleHandler}>Connexion</a>
		) : (
			<a onClick={this.logOutHandle}>Déconnexion</a>
		)
	}

	render() {
		const { user, login } = this.props

		return (
			<nav>
				<div className="nav-wrapper cyan  darken-3">
					<NavLink to="" className="brand-logo left">
						Home
					</NavLink>

					<ul id="nav-mobile" className="right">
						<li>{this.afficheConnexion(login)}</li>

						<li>
							<NavLink to="/sujets">Sujets</NavLink>
						</li>

						<li>{this.afficheAvatar(user)}</li>
					</ul>
				</div>
			</nav>
		)
	}
}
//
const mapStateToProps = state => {
	return {
		login: state.auth.isLogin,
		user: state.auth.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLogOut: () => dispatch(logOut()),
		onConnectWithGoogle: () => dispatch(connectWithGoogle()),
		onGetSujets: () => dispatch(getSujets()),
		onInitSujets: () => dispatch(initSujets())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar)
