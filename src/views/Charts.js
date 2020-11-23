import React from 'react'

// components
import Table from '../components/Charts/Table'

const Charts = ({charts}) => {
    return (
        <>
            <Table charts={charts} />
            <button onClick={() => console.log(charts)}>aösldkfhj</button>
        </>
    )
}

export default Charts