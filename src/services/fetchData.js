export async function fetchPokemon(filter) {
  if (filter === 'All') {
    const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
    const response = await resp.json();
    return response.results;
  } else {
    const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${filter}`);
    const response = await resp.json();
    return response.results;
  }
}

export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const response = await resp.json();
  return response;
}