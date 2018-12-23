import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../components/pages/HomePage'
import SujetsPage from '../components/pages/SujetsPage'
import PostsPage from '../components/pages/PostsPage'
import VisaPage from '../components/pages/VisaPage'

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/sujets" component={SujetsPage} />
		<Route path="/post/:id" component={PostsPage} />
		<Route path="/visa/:id" component={VisaPage} />
	</Switch>
)

export default Routes
