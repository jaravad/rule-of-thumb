import { NavLink } from 'react-router-dom';

import search from '../assets/img/search.svg';

const NavBar = () => {
  return (
    <nav className="nav" role="navigation">
      <div className="max-centered">
        <h1 className="nav__logo">Rule of thumb.</h1>
        <button className="nav__hamburger icon-button" alt="Open Menu">
          <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <ul className="nav__links">
          <li>
            <NavLink to="/">Past Trials</NavLink>
          </li>
          <li>
            <NavLink to="/">How It Works</NavLink>
          </li>
          <li>
            <NavLink to="/">Login / Sign Up</NavLink>
          </li>
          <li>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <input
                className="nav__search-input"
                aria-label="search"
                type="text"
              />
              <button
                className="nav__search icon-button"
                alt="Search"
                type="submit"
              >
                <img src={search} alt="search" />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
