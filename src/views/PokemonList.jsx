import React, { useEffect } from 'react';
import { useState } from 'react';
import { fetchPokemon, fetchTypes } from '../services/fetchData';
import styles from './PokemonList.css';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchPokemon(filter);
        const dataTwo = await fetchTypes();
        setPokemon(data);
        setTypes(dataTwo);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [filter]);

  const handleFilter = async (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      <h2>Pokemon</h2>
      <select onChange={(e) => handleFilter(e)}>
        <option value={'All'}>All</option>
        {types.map((type) => (
          <option key={type.type} value={type.type}>
            {type.type}
          </option>
        ))}
      </select>
      <div className={styles.pokemonList}>
        {pokemon.map((poke) => (
          <div key={poke.id} className={styles.pokeCard}>
            <h3>{poke.pokemon}</h3>
            <img src={poke.url_image}></img>
          </div>
        ))}
      </div>
    </>
  );
}
