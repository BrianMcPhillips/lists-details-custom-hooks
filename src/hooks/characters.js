import { useEffect, useState } from 'react';
import { getCharacterByName, getCharacters } from '../services/xFilesApi';

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

export const useCharacterByName = name => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterByName(name)
      .then(jsonCharacter => setCharacter(jsonCharacter))
      .finally(() => setLoading(false));
  }, [name]);

  return {
    loading,
    character
  };
};
