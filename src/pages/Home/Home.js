import React from "react";
import HeroSection from "../../components/HeroSection";
import Loader from "../../components/Loader";
import MovieCard from "../../components/MovieCard";
import useMovies from "../../Hooks/useMovie";
import "./Home.css";

const Home = () => {
  const { movies, isLoading } = useMovies();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <HeroSection />
      <section className="movie-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="movie-heading">
                <h2 className="heading heading-primary text-center pb-5">
                  Streaming movies & series
                </h2>
              </div>
            </div>
            {movies.map((movie) => (
              <MovieCard key={movie.show.id} movie={movie.show} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
