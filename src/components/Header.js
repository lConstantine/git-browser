import React from "react";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const { userName, repositoryName } = useParams();

  return (
    <nav className="nav-wrapper teal lighten-2">
      <div className="left" style={{'margin-left': '10px'}}>{repositoryName || userName || "Welcome"}</div>
        <ul className="right hide-on-med-and-down">
        <li>{userName && (<Link className="right" to="/" id="go-back">Go Home</Link>)}</li>
        <li>{repositoryName && (<Link className="center" to={`/${userName}`}>Go Back</Link>)}</li>
        </ul>
    </nav>
  );
};

Header.propTypes = {};

export default Header
