import React from "react";
import "./FilmRow.css";
import { Fave } from "../Fave/Fave";

interface FilmRowProps {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
  isFave: boolean;
  onFaveToggle: Function;
}

const handleDetailsClick = (title: string) => {
  console.log(`Fetching details for: ${title}`);
};

export const FilmRow = (props: FilmRowProps) => {
  return (
    <div
      // film={film}
      key={props.id}
      className="film-row"
      onClick={() => handleDetailsClick(props.title)}
    >
      <div className="film-summary">
        <h1>{props.title}</h1>
        <p>{new Date(props.release_date).getFullYear()}</p>
        <Fave isFave={props.isFave} onFaveToggle={() => props.onFaveToggle()} />
      </div>
    </div>
  );
};
