import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header/Navbar.css";
import { FaSearch } from "react-icons/fa";

function Navbar({ searchQuery, setSearchQuery, onSearchSubmit }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand-row">
          <Link
            to="/client-application-status"
            className="site-header__brand"
            aria-label="Government of Canada"
          >
            <div className="site-header__flag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 600"
                className="site-header__flag-svg"
                aria-hidden="true"
              >
                <rect width="300" height="600" fill="#FF0000" />
                <rect x="300" width="600" height="600" fill="#FFFFFF" />
                <rect x="900" width="300" height="600" fill="#FF0000" />
                <path
                  fill="#FF0000"
                  d="m 600,70 -37,85 -53,-47 18,72 -86,-11 44,53 -70,38 78,41 -31,76 88,-34 -13,107 62,0 0,-107 88,34 -31,-76 78,-41 -70,-38 44,-53 -86,11 18,-72 -53,47 z"
                />
              </svg>
            </div>

            <div className="site-header__title-lockup">
              <div className="site-header__title-group">
                <span>Government</span>
                <span>of Canada</span>
              </div>
              <div className="site-header__divider"></div>
              <div className="site-header__title-group site-header__title-group--french">
                <span>Gouvernement</span>
                <span>du Canada</span>
              </div>
            </div>
          </Link>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (onSearchSubmit) onSearchSubmit(searchQuery);
            }}
            className="site-header__search"
            role="search"
          >
            <div className="site-header__search-field">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search IRCC"
                aria-label="Search IRCC"
                className="site-header__search-input"
              />
              <button
                type="submit"
                className="site-header__search-button"
                aria-label="Search"
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
