export const getCharacters = async() => {
  const res = await fetch('https://xfiles-api.herokuapp.com/api/v1/characters');
  const json = await res.json();
  if(!res.ok) throw 'Bad API call unable to fetch';

  return json.results.map(character => ({
    name: character.name,
    status: character.status,
    occupation: character.occupation,
    image: character.image,
    description: character.description
  }));
};

export const getCharacterById = async(name) => {
  const res = await fetch(
    `https://xfiles-api.herokuapp.com/api/v1/characters/${name}`);
  const [json] = await res.json();
  if(!res.ok) throw 'Bad API call unable to fetch';

  return {
    name: json.name,
    status: json.status,
    occupation: json.occupation,
    image: json.image,
    description: json.description
  };
};

