import React, { useState } from 'react'

// import components
import Upload from '../components/Main/Upload'
import Error from '../components/Main/Error'

import styles from '../styles/main.module.scss'

const Main = ({setCharts}) => {
    const [isJSON, setIsJSON] = useState(true)
    const [errorText, setErrorText] = useState(null)

    const onUpload = e => {
        try {
            const file = e.target.files[0]
            console.log(file)

            if (file.type !== "application/json") {
                setIsJSON(false)
                return setErrorText('File needs to be a JSON file!')
            }

            const reader = new FileReader()
            reader.onload = e => {
                const result = e.target.result
                const jsonFile = JSON.parse(result)
                setCharts(jsonFile)
            }
    
            reader.readAsText(file)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.main}>
            {!isJSON ? <Error errorText={errorText} setIsJSON={setIsJSON} /> : null}
            <Upload onUpload={onUpload} />
        </div>
    )
}

export default Main