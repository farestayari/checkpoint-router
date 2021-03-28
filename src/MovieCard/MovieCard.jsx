import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from 'react-stars'

export const MovieCard = ({
  movie: { img, name, rating, date, description },
}) => {
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
    </div>
  );
};
