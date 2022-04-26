import React, { useEffect } from 'react'
import { useState } from 'react';
import { fetchPokemon } from '../services/fetchData';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    try{
      const fetchData = async() => {
        const data = await fetchPokemon();
        console.log(data);
      }
      await fetchData();
    } catch(error){
      console.error(error);
    }
  })
  return (
    <>
      {pokemons.map((pokemon) => {
        <h3 key={pokemon.id}>{pokemon.pokemon}</h3>
      })}
    </>
  )
}
