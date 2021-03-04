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
      <div className="CharacterDetail">
        <main className="CharacterDetail__main">
          <Link className="CharacterDetail__link" to="/">
            <i class="fa fa-angle-left" aria-hidden="true">
              Volver
            </i>
          </Link>

          <article className="CharacterDetail__article">
            <div className="CharacterDetail__image">
              <img
                src={props.character.image}
                alt={`Imagen de ${props.character.image}`}
              />
            </div>
            <h3 className="CharacterDetail__name">{props.character.name}</h3>
            <div className="CharacterDetail__detail">
              <p>Status: {props.character.status}</p>
              <p>
                Species: {props.character.species} {iconSpecie}
              </p>
              <p>Origin: {props.character.origin}</p>
              <p>Episodes: {props.character.episodes}</p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};
export default CharacterDetail;
/* 
monster <i class="fa fa-optin-monster" aria-hidden="true"></i>
alien <i class="fa fa-reddit-alien" aria-hidden="true"></i>
human <i class="fa fa-user" aria-hidden="true"></i> */
