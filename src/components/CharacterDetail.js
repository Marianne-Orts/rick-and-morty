import React from "react";
import { Link } from "react-router-dom";
import "./App.scss";
import "./CharacterDetail.scss";

const CharacterDetail = (props) => {
  const iconSpecie =
    props.character.species === "Human" ? (
      <i class="fa fa-user" aria-hidden="true"></i>
    ) : (
      <i class="fa fa-optin-monster" aria-hidden="true"></i>
    );

  return (
    <>
      <main className="CharacterDetail">
        <Link className="CharacterDetail__link" to="/">
          <i class="fa fa-angle-left" aria-hidden="true">
            Volver
          </i>
        </Link>

        <div className="CharacterDetail__image">
          <img
            src={props.character.image}
            alt={`Imagen de ${props.character.image}`}
          />
        </div>
        <div className="CharacterDetail__detail">
          <h3>{props.character.name}</h3>
          <p>Status: {props.character.status}</p>
          <p>
            Species: {props.character.species} {iconSpecie}
          </p>
          <p>Origin: {props.character.origin}</p>
          <p>Episodes: {props.character.episodes}</p>
        </div>
      </main>
    </>
  );
};
export default CharacterDetail;
/* 
monster <i class="fa fa-optin-monster" aria-hidden="true"></i>
alien <i class="fa fa-reddit-alien" aria-hidden="true"></i>
human <i class="fa fa-user" aria-hidden="true"></i> */
