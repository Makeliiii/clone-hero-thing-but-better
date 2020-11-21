import React from 'react'

const Upload = ({ onUpload }) => {
    return (
        <label for="file">
            <input type="file" name="file" id="file" accept="application/json" onChange={e => onUpload(e)} />
        </label>
    )
}

export default Upload