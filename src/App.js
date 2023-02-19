import { RouterProvider } from "react-router-dom";
import { MovieProvider } from "./Context/moviesContext";
import router from "./routes/routes";

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;
