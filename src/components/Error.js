import React from 'react'

import { ReactComponent as Close } from '../icons/close.svg'
import styles from '../styles/error.module.scss'

const Error = ({ errorText, setIsJSON }) => {
    return (
        <div className={styles.notif}>
            <p className={styles.errorText}>{errorText}</p>
            <Close
                className={styles.close}
                onClick={() => setIsJSON(true)}
            />
        </div>
    )
}

export default Error