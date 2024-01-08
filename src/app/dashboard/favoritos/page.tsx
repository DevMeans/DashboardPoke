import { PokemonGrid } from "@/app/pokemons";



export default async function PokemonsFavoritesPage() {
    
    
    return (
        <div className="flex flex-col">
            <span className="text-8xl">Lista de pokemons <small className="text-blue-500">Favoritos</small> </span>

                <PokemonGrid pokemons={[]} />
        </div>
    );
}