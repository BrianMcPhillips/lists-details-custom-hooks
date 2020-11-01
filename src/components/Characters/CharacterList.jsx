import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../hooks/characters';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ page }) => {
  const { loading, characters } = useCharacters(page);
  if(loading) return <h1>Loading!</h1>;

  const characterStuff = characters.map(character => (
    <li key={character.name}>
      <Link to={`/characters/${character.id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul className="CharacterList" data-testid="characters">
      {characterStuff}
    </ul>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};


export default CharacterList;
