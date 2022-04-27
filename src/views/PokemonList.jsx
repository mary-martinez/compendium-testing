import React, { useEffect } from 'react'
import { useState } from 'react';
import { fetchPokemon } from '../services/fetchData';
import styles from './PokemonList.css';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  useEffect(() => {
    try{
      const fetchData = async() => {
        const data = await fetchPokemon();
        console.log('data', data);
        setPokemon(data);
        setLoading(false);
      }
      fetchData();
    } catch(error){
      console.error(error);
    }
  }, [])
  
  // const handleSearch = async () => {

  // }
  
  return (
    <>
    { loading && <p>Loading...</p>}
      <h2>Pokemon</h2>
      {/* <label>
        Search for a Pokemon
      <input value={search} onChange={handleSearch}/>
      </label> */}
      <div className={styles.pokemonList}>
        {pokemon.map((poke) => (
          <div key={poke.id} className={styles.pokeCard}>
            <h3>{poke.pokemon}</h3>
            <img src={poke.url_image}></img>
          </div>
        ))}
      </div>
    </>
  )
}
