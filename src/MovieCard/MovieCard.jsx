import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from 'react-stars'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { Movie } from "../Movie/Movie";


export const MovieCard = ({
  movie: { id,img, name, rating, date, description , trailer },
}) => {
  console.log(id);
  return (
    <div>
      <Card style={{ width: "18rem", margin: "10px"}}>
        <Card.Img variant="top" style={{ height: "300px" }} src={img} />
        <Card.Body>
          <Card.Title style={{ height: "50px" }}>{name}</Card.Title>
          <Card.Text style={{ height: "80px" }}>{description}</Card.Text>
          <Card.Text style={{ height: "20px" }}>{date}</Card.Text>
          <ReactStars count={rating} size={24} half={false} edit={false} color2={'#ffd700'} />
        </Card.Body>
      </Card>
      <Router>
      <Link to="/movie">{name}</Link>
        <Route path="/movie" render={() => (
          <Movie name={name} trailer={trailer} description={description} />  )}
          />
      </Router>
    </div>
  );
};
