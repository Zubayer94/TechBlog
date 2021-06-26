import React from 'react'
import Header from './layout/header'

export default function Error() {
    return (
        <>
            <Header type='errorheader' />
            <div>
                <h1 className="text-center mt-5">Oops! Page not found!</h1>
            </div>
        </>
    )
}