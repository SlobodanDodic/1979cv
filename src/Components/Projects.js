import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";

import GitHubIcon from "@material-ui/icons/GitHub";
import wip from "../Assets/projects/wip.png";

const Projects = () => {
  return (
    <Grid container className="projects">
      <Grid item xs={12} sm={12}>
        <img id="projects-img" src={wip} alt="projects" />
      </Grid>
      <Grid className="git" item xs={12} sm={12}>
        <h2 className="title">Project page</h2>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Link
          style={{
            fontSize: "1.5rem",
            display: "block",
            textDecoration: "none",
            paddingBottom: "25px",
          }}
          href="https://github.com/SlobodanDodic?tab=repositories"
          target="blank"
        >
          <GitHubIcon
            style={{
              display: "block",
              margin: "0 auto",
              textDecoration: "none",
            }}
            fontSize="large"
            color="primary"
          />
          My Github profile
        </Link>
      </Grid>

      <Grid className="split-pane app-side" item xs={12} sm={6}>
        <h2 className="title">Apps</h2>
        <Paper elevation={3}>
          <h3>Event Reminder App</h3>
          <p>
            An app made on my family members request. They needed some app to
            help them with their time schedule.
          </p>
          <hr />
          <Link
            style={{ textDecoration: "none", fontSize: "17px" }}
            href="https://event-reminder.netlify.app/"
            target="blank"
          >
            Event Reminder App DEMO
          </Link>
        </Paper>

        <Paper elevation={3}>
          <h3>Todo App</h3>
          <p>
            I wanted to design and code an app for the first time. Also I needed
            an app to practice my learned knowledge.
          </p>
          <hr />
          <Link
            style={{ textDecoration: "none", fontSize: "17px" }}
            href="https://todo-units-app.netlify.app/"
            target="blank"
          >
            Todo App DEMO
          </Link>
        </Paper>

        <Paper elevation={3}>
          <h3>Movie App</h3>
          <p>
            An app made with API movie database provaded with search bar and
            separate page with favourite movies
          </p>
          <hr />
          <Link
            style={{ textDecoration: "none", fontSize: "17px" }}
            href="https://slobodandodic.github.io/movie-app/"
            target="blank"
          >
            Movie App DEMO
          </Link>
        </Paper>
      </Grid>

      <Grid className="split-pane web-side" item xs={12} sm={6}>
        <h2 className="title">Web sites</h2>
        <Paper elevation={3}>
          <h3>Driving school L Team Sombor</h3>
          <p>
            Website made for my brother-in-law. He wanted a website for his
            driving school, located in Sombor.
          </p>
          <hr />
          <Link
            style={{ textDecoration: "none", fontSize: "17px" }}
            href="https://www.autoskolalteam.rs/"
            target="blank"
          >
            L Team Sombor LINK
          </Link>
        </Paper>

        <Paper elevation={3}>
          <h3>Apartments Sombor 19</h3>
          <p>
            Website made for my cousin. He wanted a website for his apartments
            in our hometown Sombor.
          </p>
          <hr />
          <Link
            style={{ textDecoration: "none", fontSize: "17px" }}
            href="https://www.sombor19.com/"
            target="blank"
          >
            Apartments Sombor 19 LINK
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Projects;
