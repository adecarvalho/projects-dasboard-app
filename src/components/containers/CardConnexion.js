import React from 'react'

const CardConnexion = () => {
	return (
		<div className="card z-depth-3">
			<div className="card-content">
				<div className="card-title cyan-text text-darken-4 center">
					Interface Web pour le Suivi des Projets Tutorés.
				</div>

				<p className="center grey-text text-darken-3">
					Veuillez vous connecter avec votre compte Google, via le bouton
					Connexion
				</p>
				<p className="center grey-text text-darken-3">
					Puis choisir votre sujet, via le bouton Sujets.
				</p>
				<p className="center grey-text text-darken-3">
					A la fin de votre saisie pensez à vous deconnecter, via le bouton
					Deconnexion.
				</p>
			</div>
		</div>
	)
}

export default CardConnexion
