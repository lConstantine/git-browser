import React from "react";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const { userName, repositoryName } = useParams();

  return (
    <nav className="teal lighten-2">
      <div id="repository-name" className="left hide-on-med-and-down">{repositoryName || userName || "Welcome"}</div>
        {userName && (<Link className="right hide-on-med-and-down" to="/" id="go-back">Go Home</Link>)}
        {repositoryName && (<Link to={`/${userName}`} className="right hide-on-med-and-down" id="go-repository-list">Go Back</Link>)}
    </nav>
  );
};

Header.propTypes = {};

export default Header
