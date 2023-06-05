import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="heading">Understand Hooks</h1>
      <div className="divz-container">
        <div className="divz" style={{ backgroundColor: "#007bff" }}>
          <Link
            to="/counter"
            className="Button"
            style={{ backgroundColor: "#fff", color: "#007bff" }}
          >
            Counter Example
          </Link>
        </div>
        <div className="divz" style={{ backgroundColor: "#dc3545" }}>
          <Link
            to="/stringtype"
            className="Button"
            style={{ backgroundColor: "#fff", color: "#dc3545" }}
          >
            StringType
          </Link>
        </div>
        <div className="divz" style={{ backgroundColor: "#171717" }}>
          <Link
            to="/windowwidth"
            className="Button"
            style={{ backgroundColor: "#fff", color: "#dc3545" }}
          >
            WindowWidth
          </Link>
        </div>
        <div className="divz" style={{ backgroundColor: "#171767" }}>
          <Link
            to="/context"
            className="Button"
            style={{ backgroundColor: "#fff", color: "#dc3545" }}
          >
            React Context
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
