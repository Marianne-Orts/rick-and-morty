import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getCharactersFromApi from "../services/GetCharactersFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    //hook para empezar ciclo de vida, al empezar la aplicacion web
    getCharactersFromApi().then((data) => setCharacters(data)); //este data no es el de antes
  }, []);

  //filtrame los personajes cuyo nombre incluya el input
  const filterCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(input.toLowerCase());
  });

  const handleFilter = (inputChange) => {
    setInput(inputChange.value);
  };

  return (
    <>
      <div className="App-container">
        <header className="App-header">logo</header>
        <Filters handleFilter={handleFilter} />
        <section className="App-section">
          <CharacterList characters={filterCharacters} />
          <Switch>
            <Route
              path="/character/:id" /* render={renderDetail} */ /* component={CharacterCard} */
            />
          </Switch>
        </section>
      </div>
    </>
  );
};
export default App;
