import React from "react";
import loading from "../assets/loading.gif";

const Loader = () => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loader;
