import React from 'react'

const Upload = ({ onUpload }) => {
    return (
        <input type="file" id="jsonFile" accept="application/JSON" onChange={e => onUpload(e)} />
    )
}

export default Upload