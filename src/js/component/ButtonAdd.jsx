import React from "react";
import { Link } from "react-router-dom";

export const ButtonAdd = () => {
  return (
    <div className="d-flex justify-content-end align-items-end mb-4 mt-4">
      <button className="btn btn-success">
        <Link to="/Add" className="text-white text-decoration-none">
          Create contact
        </Link>
      </button>
    </div>
  );
};
