import React from "react";
import Grid from "@material-ui/core/Grid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mePhoto from "../Assets/aboutme/me.png";
import kendoPhoto from "../Assets/aboutme/kendo.png";
import bikePhoto from "../Assets/aboutme/bike.png";
import toronado from "../Assets/aboutme/guitars/toronado.png";
import gibson from "../Assets/aboutme/guitars/gibson.png";
import mustang from "../Assets/aboutme/guitars/mustang.png";
import fender from "../Assets/aboutme/guitars/fender.png";
import stagg from "../Assets/aboutme/guitars/stagg.png";

const options = {
  title: {
    text: "",
  },
  series: [
    {
      data: [
        [7, "1"],
        [8, "2"],
        [4, "3"],
        [4, "4"],
        [2, "5"],
        [1, "6"],
      ],
      keys: ["y", "name"],
      type: "pie",
    },
  ],
};

const AboutMe = () => {
  return (
    <div className="about-me">
      <Grid container className="about-edu">
        <Grid item xs={12} sm={6}>
          <h2>About me</h2>
          <p>
            I started to learn programming in 2019 and so far I'm enjoying while
            coding in html, css and javascript.
          </p>
          <p>
            My main plan is gaining experience in coding and learning as much as
            possible in years to come.
          </p>
          <p>Someday this might not be just my hobby, but my profession!</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img id="me" src={mePhoto} alt="me" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Education</h2>
          <p style={{ color: "blue" }}>Preschool - 7 years (1)</p>
          <p>Elementary school - 8 years (2)</p>
          <p style={{ color: "green" }}>Gymnasium - 4 years (3)</p>
          <p style={{ color: "orange" }}>Faculty of Forestry - 4 years (4)</p>
          <p style={{ color: "purple" }}>Faculty of Biofarming - 2 years (5)</p>
          <p style={{ color: "red" }}>IT Academy - 1 year (6)</p>
        </Grid>
      </Grid>

      <div className="language-container">
        <Grid container className="language">
          <Grid item xs={12} sm={12}>
            <h2>Languages</h2>
          </Grid>
          <Grid className="eng" item xs={12} sm={6}>
            <h3>English B2+</h3>
            <p>
              The final assessment after six weeks of English course organized
              by ProCredit in 2017 is C1 for conversation and B2+ for writing.
            </p>
          </Grid>
          <Grid className="ita" item xs={12} sm={6}>
            <h3>Italian A1</h3>
            <p>
              I am learning for the past 3 years on Duolingo app. So far, my
              main goal is to learn as much words as possible and then someday
              expande that knowledge with complete understanding of Italian.
            </p>
          </Grid>
        </Grid>
      </div>

      <Grid container className="hobbies">
        <Grid item xs={12} sm={12}>
          <h2>Hoobies</h2>
        </Grid>
        <Grid item xs={12} sm={12}>
          <h3>Guitars</h3>
          <Carousel className="carousel" showIndicators={false}>
            <div>
              <img alt="" src={toronado} />
              <p className="legend">Squier Fender Toronado</p>
            </div>
            <div>
              <img alt="" src={gibson} />
              <p className="legend">Gibson Les Paul</p>
            </div>
            <div>
              <img alt="" src={mustang} />
              <p className="legend">Squier Fender Mustang</p>
            </div>
            <div>
              <img alt="" src={fender} />
              <p className="legend">Fender CF140 SCE</p>
            </div>
            <div>
              <img alt="" src={stagg} />
              <p className="legend">Stagg SW201</p>
            </div>
          </Carousel>
        </Grid>
        <Grid style={{ maxWidth: "800px", margin: "0 auto" }} container>
          <Grid item xs={12} sm={6}>
            <h3>Bycicle</h3>
            <img id="bike" src={bikePhoto} alt="Bycicle" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3>Kendo</h3>
            <img id="kendo" src={kendoPhoto} alt="Kendo" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
