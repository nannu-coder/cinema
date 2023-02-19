import { createContext, useEffect, useState } from "react";

const movieContext = createContext();

const MovieProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
      const movies = await res.json();
      setMovies(movies);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <movieContext.Provider value={{ movies, isLoading, show, setShow }}>
      {children}
    </movieContext.Provider>
  );
};

export { movieContext, MovieProvider };
