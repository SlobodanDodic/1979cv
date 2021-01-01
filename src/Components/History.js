import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import history from "../Assets/history/history.png";
import carpet from "../Assets/history/carpet.png";
import software from "../Assets/history/software.png";
import a2b from "../Assets/history/a2b.png";
import pcb from "../Assets/history/pcb.png";
import hb from "../Assets/history/halk.png";

const History = () => {
  return (
    <div className="history">
      <br />
      <Grid container>
        <Grid item xs={12} sm={12}>
          <img id="history-img" src={history} alt="history" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <h2>History page</h2>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Link
            style={{
              fontSize: "1.5rem",
              display: "block",
              textDecoration: "none",
              paddingBottom: "15px",
            }}
            href="https://www.linkedin.com/in/slobodan-dodić-99b383109/"
            target="blank"
          >
            <LinkedInIcon
              style={{
                display: "block",
                margin: "0 auto",
                textDecoration: "none",
              }}
              fontSize="large"
              color="primary"
            />
            My Linkedin profile
          </Link>
        </Grid>

        <Paper elevation={3}>
          <h3 style={{ color: "purple" }}>Oct 2004 - Feb 2006</h3>
          <h4>Mina Tepih Servis Sombor</h4>
          <p>Customer care and carpet cleaning</p>

          <img src={carpet} alt="Carpet" />
        </Paper>

        <Paper elevation={3}>
          <h3 style={{ color: "orange" }}>Oct 2006 - Feb 2008</h3>
          <h4>Solarius Novi Sad</h4>
          <p>Installation, Training and Maintenance softwares</p>
          <img src={software} alt="Software" />
        </Paper>

        <Paper elevation={3}>
          <h3 style={{ color: "green" }}>Feb 2008 - Aug 2008</h3>
          <h4>A2B Express Novi Sad</h4>
          <p>Package delivery and collection</p>
          <img src={a2b} alt="Delivery" />
        </Paper>

        <Paper elevation={3}>
          <h3 style={{ color: "brown" }}>Sep 2008 - Feb 2018</h3>
          <h4> ProCredit Bank AD</h4>
          <p>
            Agro CRM
            <br />
            (loan officer)
          </p>
          <ul
            style={{
              fontSize: "0.85em",
              textAlign: "left",
              paddingBottom: "15px",
            }}
          >
            <li>Clients acquisition and the care of existing ones</li>
            <li>Analysis of business solvency and loan disbursement</li>
          </ul>
          <div>
            <a href="https://www.procreditbank.rs/en" target="blank">
              ProCredit AD
            </a>
          </div>

          <img src={pcb} alt="PCB" />
        </Paper>

        <Paper elevation={3}>
          <h3 style={{ color: "darkblue" }}>March 2018 - present</h3>
          <h4> Halkbank AD</h4>
          <p>
            Agro CRM
            <br />
            (loan officer)
          </p>
          <ul
            style={{
              fontSize: "0.85em",
              textAlign: "left",
              paddingBottom: "15px",
            }}
          >
            <li>Creating the form of analysis and credit rules</li>
            <li>Clients acquisition and the care of existing ones</li>
            <li>Analysis of business solvency and loan disbursement</li>
          </ul>
          <div>
            <a href="http://www.halkbank.rs/home.nspx" target="blank">
              Halkbank AD
            </a>
          </div>
          <img src={hb} alt="Halk" />
        </Paper>
      </Grid>
    </div>
  );
};

export default History;
