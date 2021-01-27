import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../hooks/characters';

const Detail = () => {
  const { id } = useParams();
  const { loading, character } = useCharacterById(id);
  if(loading) return <h1>Loading!</h1>;

  return (
    <>
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <img src={character.image} alt={character.name} />
      <p>Location: {character.location}</p>
    </>
  );
};

export default Detail;
