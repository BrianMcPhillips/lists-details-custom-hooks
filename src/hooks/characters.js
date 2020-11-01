import { useEffect, useState } from 'react';
import { getCharacterById, getCharacters } from '../services/rickAndMorty';

export const useCharacters = (page) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(jsonCharacters => setCharacters(jsonCharacters))
      .finally(() => setLoading(false)); 
  }, [page]);

  return {
    loading,
    characters
  };
};

export const useCharacterById = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterById(id)
      .then(jsonCharacter => setCharacter(jsonCharacter))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    loading,
    character
  };
};
