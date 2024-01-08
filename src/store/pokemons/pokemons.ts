import { simplePokemon } from '@/app/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonState {
    [key: string]: simplePokemon
}

const initialState: PokemonState = {
    '1': { id: '1', name: 'bulbasaur' },
    '2': { id: '2', name: 'bulbasaur' }
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

        toggleFavorites(state, action: PayloadAction<simplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;
            if (!!state[id]) {//TODO: ESTA EXPRESION FIJA SI EXISTE 
                delete state[id]
                return;
            }
            state[id] = pokemon //FIXME: ESTA EXPRESION NO LA DOMINO BIEN EXPANDIRSE

        }
    }
});

export const { toggleFavorites } = pokemonsSlice.actions

export default pokemonsSlice.reducer