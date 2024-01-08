
'use client'
import { PokemonGrid, simplePokemon } from "@/app/pokemons"
import { useAppSelector } from "@/store"

export const Contenedor = () => {
    const rawPokemonData = useAppSelector(state => state.pokemons);
    return (
        <PokemonGrid pokemons={Object.values(rawPokemonData)} />
    );
};
//TODO: PUEDE QUE AL NO HACERLO ASI : const rawPokemonData = useAppSelector(state => state.pokemons);
//   return (
//     <PokemonGrid pokemons={Object.values(rawPokemonData)} />
//);
// SALGA UN ERROR QUE SE RENDERIZO DE OTRA FORMA EN TAL CASO PROBAR CON USEMEMO()
