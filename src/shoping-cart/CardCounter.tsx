'use client'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/store'
import { useDispatch } from 'react-redux'
import { addOne, initCounterState, resetCount, sustractOne } from '@/store/counter/counterSlice'
interface props {
    value?: number,

}

export interface CounterResponse {
    method: string,
    count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then(
        resp => resp.json()
    )
    return data
}
export const CardCounter = ({ value = 10 }: props) => {
    //   const [counter, setCounter] = useState(value)
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useDispatch()

    useEffect(() => {
        getApiCounter().then(
            ({ count }) => dispatch(initCounterState(count))
        )


    }, [dispatch])


    return (
        <>
            <span className="text-9xl">{count}</span>
            <div className="flex flex-row gap-2">
                <button onClick={() => dispatch(addOne())} className="p-2 bg-cyan-800 text-white rounded-md text-5xl hover:bg-cyan-700 transition-all">
                    +1
                </button>
                <button onClick={() => dispatch(sustractOne())} className="p-2 bg-cyan-800 text-white rounded-md text-5xl hover:bg-cyan-700 transition-all">
                    -1
                </button>
            </div>
        </>
    )
}
