import React from "react";
import { Link } from "react-router-dom";

function LandingPage(props) {
  return (
    <div>
      <h1>Project React</h1>
      <ul>
        <li>
          <Link to="/todo">ToDo page</Link>
        </li>
        <li>
          <Link to="/pubg">Pubg</Link>
        </li>
      </ul>
    </div>
  );
}

export default LandingPage;
