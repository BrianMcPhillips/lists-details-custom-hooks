export const getCharacters = async(page = 1) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const json = await res.json();
  if(!res.ok) throw 'Bad API call unable to fetch';

  return json.results.map(character => ({
    id: character.id,
    name: character.name,
    image: character.image
  }));
};

export const getCharacterById = async(id) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`);
  const [json] = await res.json();
  if(!res.ok) throw 'Bad API call unable to fetch';

  return {
    id: json.id,
    name: json.name,
    status: json.status,
    species: json.species,
    image: json.image,
    location: json.location.name
  };
};

