const ENDPOINT = "https://rickandmortyapi.com/api/character";

const ENDPOINT_OPTIONAL =
  "https://raw.githubusercontent.com/Adalab/ricky-morty/master/data/rick-y-morty.json";

const getCharactersFromApi = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image,
          origin: character.origin.name,
          episodes: character.episode.length, //longitud del array
        };
      });
    });
};
export default getCharactersFromApi;
