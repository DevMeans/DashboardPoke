'use client'
import { IoAlert, IoApps, IoCalendarNumber, IoCodeSlash } from 'react-icons/io5'
import { SimpleWidget } from './SimpleWidget'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initCounterState } from '@/store/counter/counterSlice'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {
    const count = useAppSelector(state => state.counter.count)

    return (
        <div className="flex flex-wrap p-2 justify-center">
            <SimpleWidget title='Counter' subTitle='Contador Redux' icon={<IoApps size={30}  />} key={`S`} label={`${count}`} />
        </div>
    )
}
