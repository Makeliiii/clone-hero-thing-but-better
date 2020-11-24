import React from 'react'

// components
import TableHead from './TableHead'
import TableBody from './TableBody'

// styling
import styles from '../../styles/charts/table.module.scss'

const Table = ({charts}) => {
    return (
        <table className={styles.table} cellSpacing="1">
            <TableHead />
            <TableBody charts={charts} />
        </table>
    )
}

export default Table