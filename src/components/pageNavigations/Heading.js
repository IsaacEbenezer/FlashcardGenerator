import React, { useState } from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  // activeLink handler
  const [activeLink, setactiveLink] = useState("createNew");

  return (
    <div className="py-5 mt-2">
      <h2 className="text-3xl font-bold px-4 mb-6">Create Flashcard</h2>
      <Link
        to="/"
        onClick={() => setactiveLink("createNew")}
        className="relative px-4 py-3 mr-3 cursor-pointer text-gray-600 pb-3 font-medium"
      >
        Create New
        <span
          id="createNew"
          style={
            activeLink === "createNew" ? { width: "100%" } : { width: "0%" }
          }
        ></span>
      </Link>
      <Link
        to="/flashcardgroup"
        onClick={() => setactiveLink("flashBtn")}
        className="relative px-4 py-3 cursor-pointer text-gray-600 pb-3 font-medium"
      >
        My Flashcard
        <span
          id="flashGroup"
          style={
            activeLink === "flashBtn" ? { width: "100%" } : { width: "0%" }
          }
        ></span>
      </Link>
      <hr
        className="bg-gray-300"
        style={{ height: "2px", marginTop: "10px" }}
      />
    </div>
  );
};

export default Heading;
