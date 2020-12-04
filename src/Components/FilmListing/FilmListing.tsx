import React, { useState } from "react";
import { FilmRow } from "../FilmRow/FilmRow";
import { FilmPoster } from "../FilmPoster/FilmPoster";
import "./FilmListing.css";

interface FilmObject {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
}

interface FilmListingProps {
  films: FilmObject[];
  faves: FilmObject[];
  onFaveToggle: Function;
}

export const FilmListing = (props: FilmListingProps) => {
  let filter: string;
  let setFilter: Function;

  [filter, setFilter] = useState("all");

  const handleFilterClick = (filter: string) => {
    console.log(`Setting filter to ${filter}`);
    setFilter(filter);
  };

  let allFilms = props.films.map((film) => {
    return (
      <>
        <FilmPoster {...film} />
        <FilmRow
          // film={film}
          isFave={props.faves.indexOf(film) >= 0 ? true : false}
          key={film.id}
          onFaveToggle={() => props.onFaveToggle(film)}
          {...film}
        />
      </>
    );
  });

  let allFaves = props.faves.map((film) => {
    return (
      <>
        <FilmPoster {...film} />
        <FilmRow
          // film={film}
          isFave={props.faves.indexOf(film) >= 0 ? true : false}
          key={film.id}
          onFaveToggle={() => props.onFaveToggle(film)}
          {...film}
        />
      </>
    );
  });

  return (
    <div className="film-list">
      <h1 className="section-title">films</h1>
      <div className="film-list-filters">
        <div
          className={`film-list-filter ${
            filter === "all" ? "is-active" : "all"
          }`}
          onClick={() => handleFilterClick("all")}
        >
          ALL
          <span className="section-count">{allFilms.length}</span>
        </div>
        <div
          className={`film-list-filter ${
            filter === "faves" ? "is-active" : "fave"
          }`}
          onClick={() => handleFilterClick("faves")}
        >
          FAVES
          <span className="section-count">{props.faves.length}</span>
        </div>
      </div>

      {filter === "all" ? allFilms : allFaves}
    </div>
  );
};
