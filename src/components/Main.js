import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Main = () => {

  const history = useHistory()

  const [name, setName] = useState('')
  const onChange = (event) => {
    setName(event.target.value)
  }

  const onClick = () => {
    history.push(name)
  }

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        history.push(name)
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return (
    <div>
      <div className="row center" style={{"marginLeft": 450}}>
        <div className="input-field col s6">
          <input id="username" type="text" value={name} onChange={onChange} />
          <label htmlFor="username">Username</label>
          <button id="search-btn" type="button" className="waves-effect waves-light btn" onClick={onClick}>Search</button>
        </div>
      </div>

    </div>
  );
}

export default Main