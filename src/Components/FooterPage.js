import React from "react";
import Grid from "@material-ui/core/Grid";

const FooterPage = () => {
  return (
    <Grid
      className="footer"
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid id="barcode" item xs={12}>
        0806979
      </Grid>
      <Grid item xs={12} style={{ paddingBottom: "10px", fontSize: "20px" }}>
        2021
      </Grid>
      <Grid item xs={12}>
        slobodandodic@gmail.com
      </Grid>
    </Grid>
  );
};

export default FooterPage;
