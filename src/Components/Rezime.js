import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import nsPhoto from "../Assets/rezime/ns.jpg";
import clockGif from "../Assets/rezime/clock.gif";
import soPhoto from "../Assets/rezime/sombor.jpg";
import guitarPhoto from "../Assets/rezime/guitar.jpg";
import pfGif from "../Assets/rezime/pinkfloyd.gif";

const Rezime = () => {
  const bDay = new Date("June 8, 1979, 01:25:00");
  const today = new Date();
  var oneDay = 1000 * 60 * 60 * 24;

  const diffDays = (today - bDay) / oneDay;
  const miliSec = diffDays * 1000 * 60 * 60 * 24;

  const [counter, setCounter] = useState(miliSec);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="rezime">
      <Grid
        className="rezime-grid-container"
        container
        direction="row"
        justify="space-between"
        spacing={3}
      >
        <Grid item xs={12} sm={4}>
          <Card className="max-width">
            <CardActionArea>
              <CardContent>
                <strong>The city I live in</strong>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={nsPhoto}
                alt="Novi Sad"
                title="Novi Sad"
              />
              <CardContent>
                <strong>Novi Sad</strong> is the second largest city in Serbia
                and it is located on the banks of the Danube river. The city
                faces the northern slopes of Fruška Gora.
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card className="max-width">
            <CardActionArea>
              <CardContent>
                <strong>Days on Earth</strong>
              </CardContent>
              <CardMedia
                id="clock"
                component="img"
                image={clockGif}
                alt="Clock"
                title="Clock"
              />
              <CardContent>
                <div className="days">
                  <NumberFormat
                    value={Math.round(diffDays)}
                    displayType={"text"}
                    format="##.####"
                  />
                  days
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card className="max-width">
            <CardActionArea>
              <CardContent>
                <strong>The city I was born in</strong>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={soPhoto}
                alt="Sombor"
                title="Sombor"
              />
              <CardContent>
                <strong>Sombor</strong> is a city and the administrative center
                of the West Bačka District in the autonomous province of
                Vojvodina, Serbia.
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea>
              <CardContent>
                <strong>The weapon of choice</strong>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={guitarPhoto}
                alt="Guitar"
                title="Guitar"
              />
              <CardContent>
                <strong>is mostly made by Fender</strong>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea>
              <CardContent>
                <strong>For common sense and meditation I use</strong>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={pfGif}
                alt="Pink Floyd"
                title="Pink Floyd"
              />
              <CardContent>
                <strong>PINK FLOYD</strong>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Rezime;
