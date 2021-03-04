import React from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = (props) => {
  return (
    <Link
      className="CharacterCard__link"
      to={`/CharacterDetail/${props.character.id}`}
    >
      <article className="CharacterCard">
        <img
          className="CharacterCard__img"
          src={props.character.image}
          alt={props.character.name}
        />
        <h2 className="CharacterCard__name">{props.character.name}</h2>
        <p className="CharacterCard__specie">{props.character.species}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
