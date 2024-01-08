
'use client'
import { PokemonGrid, simplePokemon } from "@/app/pokemons"
import { useAppSelector } from "@/store"
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const Contenedor = () => {

    const rawPokemonData = useAppSelector(state => state.pokemons);
    const [pokemon, setPokemon] = useState(Object.values(rawPokemonData))
    return (
        <>
            {
                pokemon.length  ? <PokemonGrid pokemons={pokemon} /> : <NoFavorites />
            }
        </>
    );
};
//TODO: PUEDE QUE AL NO HACERLO ASI : const rawPokemonData = useAppSelector(state => state.pokemons);
//   return (
//     <PokemonGrid pokemons={Object.values(rawPokemonData)} />
//);
// SALGA UN ERROR QUE SE RENDERIZO DE OTRA FORMA EN TAL CASO PROBAR CON USEMEMO()
export const NoFavorites = () => {

    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span className="text-3xl">No hay favoritos</span>
        </div>
    )
}