import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Breadcrumbs.css";

function Breadcrumbs({ isAdminLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleProtectedClick = (e, path) => {
    if (!isAdminLoggedIn) {
      e.preventDefault();
      alert("Please log in as Admin to access this page.");
      navigate("/Admin-Login");
    }
  };

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="breadcrumbs__inner">
        <ol className="breadcrumbs__list">
          <li>
            {location.pathname === "/Admin-Login" ? (
              <span className="breadcrumbs__current">Admin Login</span>
            ) : (
              <Link to="/Admin-Login" className="breadcrumbs__link">
                Admin Login
              </Link>
            )}
          </li>
          <li className="breadcrumbs__separator">&gt;</li>
          <li>
            {location.pathname === "/new-application" ? (
              <span className="breadcrumbs__current">New Application</span>
            ) : (
              <Link
                to="/new-application"
                className={`breadcrumbs__link ${!isAdminLoggedIn ? "disabled-link" : ""}`}
                onClick={(e) => handleProtectedClick(e, "/new-application")}
              >
                New Application {!isAdminLoggedIn && "🔒"}
              </Link>
            )}
          </li>
          <li className="breadcrumbs__separator">&gt;</li>
          <li>
            {location.pathname === "/edit-application" ? (
              <span className="breadcrumbs__current">Edit Application</span>
            ) : (
              <Link
                to="/edit-application"
                className={`breadcrumbs__link ${!isAdminLoggedIn ? "disabled-link" : ""}`}
                onClick={(e) => handleProtectedClick(e, "/edit-application")}
              >
                Edit Application {!isAdminLoggedIn && "🔒"}
              </Link>
            )}
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
