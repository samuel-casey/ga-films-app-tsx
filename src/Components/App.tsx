import React, { useState } from "react";
import "../styles.css";
import { FilmDetails } from "./FilmDetails/FilmDetails";
import { FilmListing } from "./FilmListing/FilmListing";
import TMDB from "../TMDB";

type Current = {};

interface FilmObject {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
}

export default function App() {
  // type pieces of state
  let films: object[];
  let faves: object[];
  let current: Current;
  // type setStates()
  let setFaves: Function;
  let setFilms: Function;
  let setCurrent: Function;

  [films, setFilms] = useState(TMDB.films);
  [faves, setFaves] = useState([]);
  [current, setCurrent] = useState({});

  //accepts a film object as an arg
  function handleFaveToggle(film: FilmObject) {
    // film obj goes here
    console.log("film toggled -", film.title);

    // make a copy of faves
    const newFaves = [...faves];

    // find index of clicked film
    const filmIndex = newFaves.indexOf(film);

    // if film isn't in faves, add it
    // if it's already a fave, remove it
    if (filmIndex !== -1) {
      console.log(`Removing ${film.title} from faves`);
      newFaves.splice(filmIndex, 1);
    } else {
      console.log(`Adding ${film.title} to faves`);
      newFaves.push(film);
    }

    // update state of faves
    setFaves(newFaves);
    console.log("newFavesState: ", newFaves);
  }

  function handleDetailsClick() {}

  return (
    <div className="film-library">
      <FilmListing
        films={films}
        faves={faves}
        onFaveToggle={handleFaveToggle}
      />
      <FilmDetails films={current} />
    </div>
  );
}
