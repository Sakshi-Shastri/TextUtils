import React from 'react'
import About from './About'
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>
             <li className="nav-item">
                <Link className="nav-link text-light" to="/About">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className={`btn btn-outline-${props.mode}`} type="submit">Search</button>
      </form>*/}
            <div className="form-check form-switch">
              <input
                className={`form-check-input outline-light bg-${props.mode === "success" ? "success" : "dark"}`}
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick = {props.toggleMode}
              />
              <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">
                {props.mode === "success" ? "Enable dark" : "Disable dark"} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
}

/* This has been removed from recent React versions.
Navbar.propTypes is used to define the expected types of props 
that the Navbar component should receive. It helps in catching bugs 
by ensuring that the correct types of props are passed to the component. 
In this case, it specifies that both 'title' and 'aboutText' props should be of
type string and are required.

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title : "Default Title Name",
  aboutText: "Default About" 
}
  
*/