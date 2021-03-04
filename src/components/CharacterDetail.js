import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Rick_and_Morty_-_logo_(English).png";

const CharacterDetail = (props) => {
  console.log(props.character);
  return (
    <>
      <Link to="/">
        <i className="far fa-angle-left"> Volver</i>
      </Link>
      <main className="characterCard__main">
        <article className="characterCard__article">
          <img
            className="characterCard__image"
            src={props.character.image}
            alt={`Imagen de ${props.character.image}`}
          />
          <h3 className="characterCard__name">{props.character.name}</h3>
          <p className="characterCard__detail">
            Status: {props.character.status}
          </p>
          <p className="characterCard__detail">
            Species: {props.character.species}
          </p>
          <p className="characterCard__detail">
            Origin: {props.character.origin}
          </p>
          <p className="characterCard__detail">
            Episodes: {props.character.episodes}
          </p>
        </article>
      </main>
    </>
  );
};
export default CharacterDetail;
