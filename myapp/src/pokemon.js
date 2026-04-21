// src/api/pokemon.js

const BASE_URL = "https://pokeapi.co/api/v2";

// Fetch list of Pokémon
export const getPokemonList = async (limit = 20) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    return [];
  }
};

// Fetch single Pokémon details
export const getPokemonDetails = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    return null;
  }
};