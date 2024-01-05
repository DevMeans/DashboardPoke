import Image from "next/image"
import { simplePokemon } from ".."
import { PokemonCard } from "./PokemonCard"

interface props{
    pokemons:simplePokemon[]
}

export const PokemonGrid = ({pokemons}:props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
    {
        pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />
            
            
            /* <Image
                key={poke.id}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                width={100}
                height={100}
                alt="10"
            />*/
        })
    }

</div>
  )
}
