import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/CharacterDetail/${props.character.id}`}>
      <article>
        <img src={props.character.image} alt={props.character.name} />
        <h2>{props.character.name}</h2>
        <p>{props.character.species}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
