import React from "react";
import { Card } from "react-bootstrap";
import { Player } from 'video-react';
import { Redirect, useParams, useHistory  } from "react-router-dom";
import { Link, Route, BrowserRouter as Router , Switch } from 'react-router-dom';

import "./Movie.css"


export const Movie = ({
  moviesList
}) => {

  const { movieId } = useParams();
  let history = useHistory();
  function goBack() {
    history.push("/");
  }

  const movie = moviesList.find((movie) => movie.id === Number(movieId));  
  return (
    <div>
      <Card style={{ width: "18rem", margin: "10px"}}>
        <Card.Body>
          <Card.Title style={{ height: "50px" }}>{movie.name}</Card.Title>
          <Card.Text style={{ height: "80px" }}>{movie.description}</Card.Text>
        </Card.Body>
      </Card>
      <video width="400" src={movie.trailer} controls>
      </video>
      {/* <Link to="/">go back</Link>  */}
      <button onClick={goBack}>go back</button>
    </div>
  );
};
