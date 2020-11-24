import React from 'react'

import styles from '../../styles/main/upload.module.scss'

const Upload = ({ onUpload }) => {
    return (
        <label htmlFor="file" className={styles.upload}>
            Upload songs.json
            <input type="file" name="file" id="file" accept="application/json" onChange={e => onUpload(e)} />
        </label>
    )
}

export default Upload