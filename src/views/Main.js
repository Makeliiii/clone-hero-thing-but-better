import React, { useState } from 'react'

// import components
import Upload from '../components/Upload'

const Main = () => {
    const [charts, setCharts] = useState([])

    const onUpload = e => {
        try {
            const file = e.target.files[0]
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
        <>
            <Upload onUpload={onUpload} />
            <button onClick={() => console.log(charts)}>log charts</button>
        </>
    )
}

export default Main