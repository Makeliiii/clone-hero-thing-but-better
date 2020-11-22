import React, { useState } from 'react'

// import views
import Main from './views/Main'

const App = () => {
	const [charts, setCharts] = useState([])
	
  	return (
		<>
	  		<Main setCharts={setCharts} />
		</>
  	)
}

export default App