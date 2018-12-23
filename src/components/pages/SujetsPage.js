import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import SujetsList from '../containers/SujetsList'

class SujetsPage extends React.Component {
	componentWillMount() {}

	render() {
		const { islogin, sujets } = this.props

		if (!islogin) {
			return <Redirect to="/" />
		}
		//const { sujets } = this.props

		return (
			<div className="container">
				<div className="row">
					<div className="col s12">
						<SujetsList sujets={sujets} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		sujets: state.sujets.sujets,
		islogin: state.auth.isLogin
	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SujetsPage)
