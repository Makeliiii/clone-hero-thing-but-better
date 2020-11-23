import React from 'react'

// components
import TableHead from './TableHead'
import TableBody from './TableBody'

const Table = ({charts}) => {
    return (
        <table>
            <TableHead />
            <TableBody charts={charts} />
        </table>
    )
}

export default Table