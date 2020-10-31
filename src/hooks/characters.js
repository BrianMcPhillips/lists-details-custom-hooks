import { useEffect, useState } from 'react';
import { getCharacterById, getCharacters } from '../services/xFilesApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(jsonCharacters => setCharacters(jsonCharacters))
      .finally(() => setLoading(false)); 
  }, []);

  return {
    loading,
    characters
  };
};

export const useCharacterById = name => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterById(name)
      .then(jsonCharacter => setCharacter(jsonCharacter))
      .finally(() => setLoading(false));
  }, [name]);

  return {
    loading,
    character
  };
};
