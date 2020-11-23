import React from 'react'

// components
import TableRow from './TableRow'

const TableBody = ({charts}) => {
    const tableBody = () => {
        return charts.map((chart, index) => {
            return (
                <TableRow
                    key={index}
                    name={chart.Name}
                    album={chart.Album}
                    artist={chart.Artist}
                    charter={chart.Charter}
                    genre={chart.Genre}
                    year={chart.Year}
                    lyrics={chart.lyrics}
                    songlenght={chart.songlenght}
                />
            )
        })
    }

    return (
        <tbody>
            {tableBody()}
        </tbody>
    )
}

export default TableBody