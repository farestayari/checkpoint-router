import React, { useState } from "react";
import "./App.css";
import { MoviesList } from "./MoviesList/MoviesList";
import { SearchMovie } from "./searchMovie/searchMovie";
import {moviesData} from "./Moviesdata";
import { AddMovie } from "./AddMovie/AddMovie";
import { Movie } from "./Movie/Movie";


const App = () => {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");

  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="container">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />

      <MoviesList
        moviesList={moviesList}
        ratingSearch={ratingSearch}
        nameSearch={nameSearch}
      />
      <div className="addmovie">
        <AddMovie addMovie={addMovie} />
      </div>
      
    </div>
  );
};

export default App;

