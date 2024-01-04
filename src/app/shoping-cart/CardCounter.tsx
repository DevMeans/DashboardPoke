'use client'
import React, { useState } from 'react'

interface props {
    value?:number
}

export const CardCounter = ({value=10}:props) => {
    const [counter, setCounter] = useState(value)
    return (
        <>
            <span className="text-9xl">{counter}</span>
            <div className="flex flex-row gap-2">
                <button onClick={() => setCounter(counter + 1)} className="p-2 bg-cyan-800 text-white rounded-md text-5xl hover:bg-cyan-700 transition-all">
                    +1
                </button>
                <button onClick={() => setCounter(counter - 1)} className="p-2 bg-cyan-800 text-white rounded-md text-5xl hover:bg-cyan-700 transition-all">
                    -1
                </button>
            </div>
        </>
    )
}
