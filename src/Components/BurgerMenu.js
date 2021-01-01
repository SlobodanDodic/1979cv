import React from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <Link
                  to="/"
                  variant="body1"
                  color="inherit"
                  className="all-links"
                >
                  <h2>home</h2>
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutme"
                  color="inherit"
                  variant="body1"
                  className="all-links"
                >
                  <h2>about me</h2>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  variant="body1"
                  color="inherit"
                  className="all-links"
                >
                  <h2>projects</h2>
                </Link>
              </li>
              <li>
                <Link
                  to="/history"
                  variant="body1"
                  color="inherit"
                  className="all-links"
                >
                  <h2>history</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
