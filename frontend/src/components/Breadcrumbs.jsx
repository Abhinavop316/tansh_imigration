import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Breadcrumbs.css";

function Breadcrumbs() {
  const location = useLocation();

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="breadcrumbs__inner">
        <ol className="breadcrumbs__list">
          <li>
            <Link
              to="/client-application-status"
              className="breadcrumbs__link disabled-link"
            >
              Home
            </Link>
          </li>
          <li className="breadcrumbs__separator">&gt;</li>
          <li>
            <Link
              to="/client-application-status"
              className="breadcrumbs__link disabled-link"
            >
              Immigration and citizenship
            </Link>
          </li>
          <li className="breadcrumbs__separator">&gt;</li>
          <li>
            <Link
              to="/client-application-status"
              className="breadcrumbs__link disabled-link"
            >
              My Application
            </Link>
          </li>
          <li className="breadcrumbs__separator">&gt;</li>
          <li>
            <span className="breadcrumbs__current">
              Client Application Status
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
