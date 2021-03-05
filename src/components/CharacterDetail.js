import React from "react";
import { Link } from "react-router-dom";
import "./App.scss";
import "./CharacterDetail.scss";
import alien from "../images/alien-head-svgrepo-com.svg";
import death from "../images/death-skull-and-bones-svgrepo-com.svg";
import human from "../images/human-head-silhouette-with-cogwheels-svgrepo-com.svg";

const CharacterDetail = (props) => {
  const iconSpecie =
    props.character.species === "Human" ? (
      <img className="human" src={human} alt="Imagen de un hombre" />
    ) : (
      <img className="alien" src={alien} alt="Imagen de un Alien" />
    );
  const iconStatus =
    props.character.status === "Dead" ? (
      <img className="death" src={death} alt="Imagen de una calavera" />
    ) : (
      ""
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
          <p>
            Status: {props.character.status} {iconStatus}
          </p>
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
