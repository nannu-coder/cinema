import { useContext } from "react";
import { movieContext } from "../Context/moviesContext";

const useMovies = () => {
  return useContext(movieContext);
};

export default useMovies;
