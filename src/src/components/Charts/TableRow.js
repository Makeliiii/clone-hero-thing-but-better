import React from 'react'

const TableRow = ({name, album, artist, charter, genre, year, lyrics, songlenght}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{album}</td>
            <td>{artist}</td>
            <td>{charter}</td>
            <td>{genre}</td>
            <td>{year}</td>
            <td>{lyrics}</td>
            <td>{songlenght}</td>
        </tr>
    )
}

export default TableRow