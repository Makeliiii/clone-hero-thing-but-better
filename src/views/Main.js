import React, { useState } from 'react'

// import components
import Upload from '../components/Upload'

const Main = () => {
    const [charts, setCharts] = useState([])

    const onUpload = e => {
        const file = e.target.files[0]
        console.log(file)
        const reader = new FileReader()
        reader.onload = e => {
            const result = e.target.result
            const jsonFile = JSON.parse(result)
            console.log(jsonFile)
        }

        reader.readAsText(file)
    }

    return (
        <Upload onUpload={onUpload} />
    )
}

export default Main