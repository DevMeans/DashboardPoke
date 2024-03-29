'use client'
import Link from 'next/link'
import React from 'react'
import { simplePokemon } from '..'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorites } from '@/store/pokemons/pokemons'

interface props {
    pokemon: simplePokemon
}
export const PokemonCard = ({ pokemon }: props) => {
    const { id, name } = pokemon
    const  isfavorite = useAppSelector(state =>!!state.pokemons[id]);
    const dispatch =useAppDispatch()
    const onToogle =()=>{
        dispatch(toggleFavorites(pokemon))
    }
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">
                    <Image className='m-auto'
                        key={id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={90}
                        height={90}
                        alt={`${name}`}

                        style={{ width: '100%' }}

                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>

                    <div className="mt-5">
                        <Link href={`/dashboard/pokemons/${name}`} prefetch={true}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Mas informacion
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div
                    onClick={onToogle}
                    className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">

                        <div className="text-red-600">
                            { isfavorite ? <IoHeart /> :<IoHeartOutline /> }
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                            { isfavorite ? 'Favoritos' : 'No es favorito' }
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
