import React, { useState } from "react";
import "./App.css";
import { MoviesList } from "./MoviesList/MoviesList";
import { SearchMovie } from "./searchMovie/searchMovie";
import {moviesData} from "./Moviesdata";
import { AddMovie } from "./AddMovie/AddMovie";
import { Movie } from "./Movie/Movie";
import { Link, Route, BrowserRouter as Router , Switch } from 'react-router-dom';




const App = () => {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");

  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <Router>
    <div className="container">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
    <Switch>
      <Route exact path="/"  render={(props) => 
          <MoviesList
          moviesList={moviesList}
          ratingSearch={ratingSearch}
          nameSearch={nameSearch}
          {...props}
      />
    } />
    <Route path="/movie/:movieId"  render={(props) => 
              <Movie moviesList={moviesList} {...props} />
    } />
  </Switch>
     
      <div className="addmovie">
        <AddMovie addMovie={addMovie} />
      </div>
    </div>
    </Router>
  );
};

export default App;

