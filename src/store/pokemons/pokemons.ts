import { simplePokemon } from '@/app/pokemons';
import { createSlice } from '@reduxjs/toolkit'


interface PokemonState{
    [key:string]:simplePokemon
} 

const initialState:PokemonState = {
    '1':{id:'1',name:'bulbasaur'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
});

export const {} = pokemonsSlice.actions

export default pokemonsSlice.reducer