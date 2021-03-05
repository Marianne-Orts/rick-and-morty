import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import logo from "../images/Rick_and_Morty_-_logo_(English).png";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getCharactersFromApi from "../services/GetCharactersFromApi";
import "./App.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    //hook para empezar ciclo de vida, al empezar la aplicacion web
    getCharactersFromApi().then((data) => setCharacters(data)); //este data no es el de antes
  }, []);

  //filtrame los personajes cuyo nombre incluya el input
  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(input.toLowerCase());
    })
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a debe ser igual a b
      return 0;
    });
  //alamcena la info en setInput del valor filtrado
  const handleFilter = (inputChange) => {
    setInput(inputChange.value);
  };
  //parseInt pq el id es un string y hay que pasarlo a numero
  // al recargar la pagina no encuentra characters, pq el array esta vacio y tarda 120ms en llamar al fetch
  //por eso lo de pagina no encontrada, po si tarda mas de lo previsto
  const renderCharacterDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectCharacterDetail = characters.find((character) => {
      return character.id === id;
    });
    if (selectCharacterDetail === undefined) {
      return "Personaje no encontrado";
    } else {
      return <CharacterDetail character={selectCharacterDetail} />;
    }
  };

  return (
    <>
      <div className="App-container">
        <header className="App-header">
          <img
            className="App-logo"
            src={logo}
            alt="Logo Rick and Morty"
            title="Logo Rick and Morty"
          />
        </header>

        <Switch>
          <Route exact path="/">
            <section className="App-section">
              <Filters handleFilter={handleFilter} input={input} />
              <CharacterList characters={filterCharacters} input={input} />
            </section>
          </Route>
          <Route path="/CharacterDetail/:id" render={renderCharacterDetail} />
        </Switch>
      </div>
    </>
  );
};
export default App;
