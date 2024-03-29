import Image from 'next/image'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoBrowsersOutline, IoCalculator, IoFastFood, IoHeartHalfOutline } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={30} />,
        title: 'Dashboard',
        subTitle: 'Vizualizacion'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={30} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFastFood size={30} />,
        title: 'Pokemons',
        subTitle: 'Generacion statica'
    },{
        path: '/dashboard/favoritos',
        icon: <IoHeartHalfOutline size={30} />,
        title: 'Favoritos',
        subTitle: 'Pokemons Favoritos'
    }

]

export const Sidebard = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-full overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white inline-flex gap-1"><FaReact /> Dash<span className="text-blue-500">9</span></h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full w-8 h-8"
                            src={`https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80`}
                            alt='Imagen icono'
                            width={50}
                            height={50}
                            priority
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Milton Cañari
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">

                {
                    menuItems.map((item) => {
                        return <SidebarMenuItem key={item.path}
                                {...item}
                        />
                    })
                }




            </div>
        </div>
    )
}
