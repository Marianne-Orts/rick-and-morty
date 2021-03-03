import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const renderCharacterList = props.characters.map((character, id) => (
    <li key={id}>
      <CharacterCard character={character} />
    </li>
  ));
  return <ul>{renderCharacterList}</ul>;
};
export default CharacterList;
