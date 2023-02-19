import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import ModalComponents from "../../components/Modal";
import useMovies from "../../Hooks/useMovie";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const { movies, isLoading, setShow } = useMovies();

  if (!movies && isLoading) {
    return <Loader />;
  }

  const currentMovie = movies.find((movie) => movie.show.id === parseInt(id));

  const handleShow = () => setShow(true);

  const {
    name,
    image,
    language,
    rating: { average },
    summary,
    runtime,
    premiered,
    network: { country },
  } = currentMovie.show;

  return (
    <section className="details-section">
      <div className="section-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="details-headings text-center p-5">
                <h2 className="details-heading">The Amazing Movies - {name}</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid w-100 h-75"
                src={image.original}
                alt={name}
              />
            </div>
            <div className="col-lg-6">
              <div className="movie-details">
                <h2>{name}</h2>
                <h5>Ratings: {average ? average : 0}</h5>
                <h5>Language: {language}</h5>
                <h5>Country: {country.name}</h5>
                <h5>Runtime: {runtime}</h5>
                <h5>Release: {premiered}</h5>
                <p>{summary}</p>
              </div>
              <div className="booked-btn">
                <Button text="Booked Now" handleClick={handleShow} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalComponents movie={currentMovie} />
    </section>
  );
};

export default Details;
