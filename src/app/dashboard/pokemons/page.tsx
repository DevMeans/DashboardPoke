import { PokemonGrid, PokemonResponse, simplePokemon } from "@/app/pokemons";


const getPokemons = async (limit = 20, offset = 0): Promise<simplePokemon[]> => {

    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
        res => res.json()
    )
    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
    
    return pokemons;
}


export default async function PokemonsPage() {
    const pokemons = await getPokemons(151)
    return (
        <div className="flex flex-col">
            <span className="text-8xl">Lista de pokemons <small className="text-blue-500">statico</small> </span>
          
                <PokemonGrid pokemons={pokemons} />
        </div>
    );
}