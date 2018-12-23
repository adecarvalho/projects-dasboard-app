import React, { Component } from 'react'

import Routes from './routes/Routes'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />

				<main id="app">
					<Routes />
				</main>

				<Footer />
			</React.Fragment>
		)
	}
}

export default App
