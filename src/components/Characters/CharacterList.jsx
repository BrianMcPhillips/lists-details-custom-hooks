import React from 'react';
import { useCharacters } from '../../hooks/characters';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = () => {
  const { loading, characters } = useCharacters();
  if(loading) return <h1>Loading!</h1>;

  const characterStuff = characters.map(character => (
    <li key={Character.name}>
      <Link to={`/characters/${character.name}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterStuff}
    </ul>
  );
};


export default CharacterList;
