import React from "react";
import { Link, useParams } from "react-router-dom";

export const Header = ({avatar}) => {
  const { userName, repositoryName } = useParams();

  return (
    <nav className="nav-wrapper teal lighten-2">
      <div
        className="left"
        style={{'marginLeft': '10px'}}>
          {
            repositoryName
            || (userName && <div
              style={{ 'height': '64px' }}>
                {userName}
                <img alt="avatar"
                className="left"
                style={{ width: '50px', 'marginTop': 8, 'marginRight': 10}}
                src={avatar}/>
            </div>)
            || 'Welcome!'
          }
      </div>
        <ul className="right hide-on-med-and-down">
        <li>{userName && (<Link className="right" to="/" id="go-back">Go Home</Link>)}</li>
        <li>{repositoryName && (<Link className="center" to={`/${userName}`}>Go Back</Link>)}</li>
        </ul>
    </nav>
  );
};
