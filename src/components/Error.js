import React from 'react'



const Error = ({ errorText, setIsJSON }) => {
    return (
        <div>
            {errorText}
            <button
                className={"ass"}
                onClick={() => setIsJSON(true)}
            >
            </button>
        </div>
    )
}

export default Error