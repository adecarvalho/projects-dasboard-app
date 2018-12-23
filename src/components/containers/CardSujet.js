import React from 'react'
import myimage from '../images/planet.png'
import { Link } from 'react-router-dom'

const CardSujet = props => {
	const { sujet } = props
	return (
		<div className="col s12 m5 offset-m1">
			<div className="card card-sujet white z-depth-4">
				<div className="card-image">
					<img src={myimage} alt="decoration" />
					<span className="card-title grey-text text-lighten-4">
						{sujet.name}
					</span>
				</div>

				<div className="card-content">
					<p className="grey-text text-darken-1">{sujet.description}</p>
				</div>

				<div className="card-action">
					<Link to={'/post/' + sujet.id} className=" btn cyan lighten-1">
						Ouvrir
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CardSujet
