
import { Contenedor } from "./Contenedor";

export const metadata = {
 title: 'PokemonFavoritos',
 description: 'PokemonFavoritos',
};
export default async function PokemonsFavoritesPage() {


    return (
        <div className="flex flex-col">
            <span className="text-8xl">Lista de pokemons <small className="text-blue-500">Favoritos</small> </span>
            <Contenedor />
        </div>
    );
}