import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import views
import Main from './views/Main'
import Charts from './views/Charts'

const App = () => {
	const [charts, setCharts] = useState([])
	
  	return (
		<Router>
			<Route exact path='/' render={props => <Main {...props} setCharts={setCharts} />} />
			<Route exact path='/charts' render={props => <Charts {...props} charts={charts} />} />
		</Router>
  	)
}

export default App