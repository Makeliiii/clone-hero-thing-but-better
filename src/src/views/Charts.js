import React from 'react'

// components
import Table from '../components/Charts/Table'

// styling
import styles from '../styles/charts/charts.module.scss'

const Charts = ({charts}) => {
    return (
        <div className={styles.charts}>
            <Table charts={charts} />
            <button onClick={() => console.log(charts)}>aösldkfhj</button>
        </div>
    )
}

export default Charts