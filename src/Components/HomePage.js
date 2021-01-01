import React, { useState } from "react";
//import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
//import ScrollDown from "../Components/ScrollDown";
import Rezime from "./Rezime";

const HomePage = () => {
  const [hoverEffectLeft, setHoverEffectLeft] = useState(false);
  const [hoverEffectRight, setHoverEffectRight] = useState(false);

  const toggleClassOnHoverLeft = () => {
    setHoverEffectLeft(!hoverEffectLeft);
  };
  const toggleClassOnHoverRight = () => {
    setHoverEffectRight(!hoverEffectRight);
  };

  return (
    <div>
      <div
        className={`container ${hoverEffectLeft ? "hover-left" : ""} ${
          hoverEffectRight ? "hover-right" : ""
        }`}
      >
        <div className="inner-container">
          <div
            className="split left"
            onMouseEnter={toggleClassOnHoverLeft}
            onMouseLeave={toggleClassOnHoverLeft}
          >
            <h1>About me</h1>
            <Link to="/aboutme" href="/aboutme" variant="body1" color="inherit">
              <p className="button">&lt;readMore&gt;</p>
            </Link>
          </div>
          <div
            className="split right"
            onMouseEnter={toggleClassOnHoverRight}
            onMouseLeave={toggleClassOnHoverRight}
          >
            <h1>Projects</h1>
            <Link
              to="/projects"
              href="/projects"
              variant="body1"
              color="inherit"
            >
              <p className="button">&lt;/readMore&gt;</p>
            </Link>
          </div>
        </div>
      </div>
      {/*       <ScrollDown /> */}
      <Rezime />
    </div>
  );
};

export default HomePage;
