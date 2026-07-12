import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const status = error?.status || 500;
  const statusText = error?.statusText || "Something went wrong";
  const message =
    error?.message || "The page you are looking for could not be loaded.";
  const data = error?.data || "Please try again or return home.";

  return (
    <div className="error-page">
      <div className="error-glow error-glow--one"></div>
      <div className="error-glow error-glow--two"></div>

      <div className="error-card">
        <div className="error-code">{status}</div>
        <div className="error-content">
          <p className="error-kicker">Oops! Route error</p>
          <h1>{statusText}</h1>
          <p className="error-message">{message}</p>
          <div className="error-details">
            <h3>Error details</h3>
            <p>{data}</p>
          </div>
          <div className="error-actions">
            <Link to="/" className="error-btn error-btn--primary">
              Go home
            </Link>
            <button
              className="error-btn error-btn--secondary"
              onClick={() => window.location.reload()}
            >
              Reload page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
