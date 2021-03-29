import React from "react";
import { Card } from "react-bootstrap";
import { Player } from 'video-react';
import "./Movie.css"


export const Movie = ({
    name , description , trailer
}) => {
//     var movieInfo= movie.find(m => m.id == match.params.movieId);
//     var movieData;
//     console.log(movie);

//     if(movieInfo)
//     movieData = <div>
//       <h3> {name} </h3>
//       <p>{description}</p>
//       <hr/>
//       <Player
//       playsInline
//       poster="/assets/poster.png"
//       src={trailer}
//     />      
//       </div>;
//   else
//     movieData = <h2> Sorry. movie doesnt exist </h2>;
  
  return (
    <div>
      <Card style={{ width: "18rem", margin: "10px"}}>
        <Card.Body>
          <Card.Title style={{ height: "50px" }}>{name}</Card.Title>
          <Card.Text style={{ height: "80px" }}>{description}</Card.Text>
        </Card.Body>
      </Card>
      <video width="400" src={trailer} controls>
      </video>

    </div>
  );
};
