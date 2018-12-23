import React from 'react'
import CardSujet from './CardSujet'

const SujetsList = ({ sujets }) => {
	return (
		<div className="row">
			{sujets &&
				sujets.map((sujet, index) => {
					return <CardSujet sujet={sujet} key={sujet.id} />
				})}
		</div>
	)
}

export default SujetsList
