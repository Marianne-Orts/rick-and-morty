import React from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterList.scss";

const CharacterList = (props) => {
  const renderCharacterList = props.characters.map((character, id) => (
    <li key={id}>
      <CharacterCard character={character} />
    </li>
  ));
  return <ul className="CharacterList">{renderCharacterList}</ul>;
};
export default CharacterList;
