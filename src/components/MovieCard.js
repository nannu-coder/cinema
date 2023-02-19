import React from "react";
import Card from "react-bootstrap/Card";
import noImage from "../assets/no-image.png";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const {
    id,
    image,
    rating: { average },
    summary,
    name,
  } = movie;

  return (
    <div className="col-lg-3">
      <Card style={{ marginBottom: "25px" }}>
        <Link to={`details/${id}`}>
          <Card.Img
            style={{ height: "395px" }}
            variant="top"
            src={image ? image.medium : noImage}
          />
        </Link>
        <Card.Body>
          <div className="title d-flex align-items-center justify-content-between">
            <Card.Title className="m-0">{name}</Card.Title>
            <b>{average ? average : 0}</b>
          </div>
          <Card.Text>{summary.substring(6, 90)}...</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
