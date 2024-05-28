'use client'
import React, {useEffect} from 'react';

function Error({error, reset}) {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className='text-center mt-10'>
            <h1>Please ty again later.</h1>
            <button className='text-amber-600' onClick={() => reset()}>try again</button>
        </div>
    );
}

export default Error;
