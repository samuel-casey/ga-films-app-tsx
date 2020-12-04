import React from "react";

interface FilmPosterProps {
  poster_path: string;
  title: string;
}

export const FilmPoster = ({ poster_path, title }: FilmPosterProps) => {
  let posterUrl = "https://image.tmdb.org/t/p/w780/" + poster_path;
  return <img src={posterUrl} alt={`${title} poster`} />;
};
