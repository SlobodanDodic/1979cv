import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import BurgerMenu from "./BurgerMenu";

const NavbarTop = () => {
  return (
    <AppBar>
      <Grid className="navbar-grid" container direction="row">
        <Link to="/" variant="body1" color="inherit" className="all-links">
          <HomeIcon />
        </Link>
        <p className="name">Boban Dodic</p>
        <BurgerMenu />
      </Grid>
    </AppBar>
  );
};

export default NavbarTop;
