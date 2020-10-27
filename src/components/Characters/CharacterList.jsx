import React from 'react';
import { useCharacters } from '../../hooks/characters';
import Character from './Character';

const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Loading!</h1>;

  const characterStuff = characters.map(character => (
    <li key={Character.name}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {characterStuff}
    </ul>
  );
};

export default CharacterList;
