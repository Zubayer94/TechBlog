import React from 'react'

const Validation = ({errorText}) => {
    return (
        <>
            {errorText ? <span className="text-danger">{errorText}</span> : null}
        </>
    )
}

export default Validation;
