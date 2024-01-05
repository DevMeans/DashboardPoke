import { Pokemon } from "@/app/pokemons"

interface props {
    params: { id: string }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache' //por manipular
    }).then(resp => resp.json())
    console.log(pokemon.name)
    return pokemon
}

export default async function PokemonPage({ params }: props) {

    const pokemon = await getPokemon(params.id)
    return (
        <div>
            <h1>{JSON.stringify(pokemon)}</h1>
        </div>
    );
}