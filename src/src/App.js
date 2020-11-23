import React, { useState } from 'react'

// import views
import Main from './views/Main'
import Charts from './views/Charts'

const App = () => {
	const [charts, setCharts] = useState([])
	
	if (!charts.length) return <Main setCharts={setCharts} />
	return <Charts charts={charts} />
}

export default App