import React from "react";
import { Link } from "react-router-dom";

const TrekNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Trek Not Found</h1>
      <p className="mb-6 text-gray-600">
        Sorry, the trek you're looking for does not exist or may have been removed.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default TrekNotFound;