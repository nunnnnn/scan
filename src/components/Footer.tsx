import React from "react";
import { Toolbar, Typography } from "@material-ui/core";

function Footer() {
  return (
    <div style={{ marginTop: 50 }}>
        <Toolbar   style={{ justifyContent: "center", marginTop: "auto" }}>
        <Typography >
            55555555        
        </Typography>
        </Toolbar>
        
      {/* <Toolbar
        style={{ justifyContent: "center", marginTop: "auto" }}
        sx={{ bgcolor: "#282c34" }}
      >
        <Typography variant="caption" sx={{ color: "#fff" }}>
          COPYRIGHT @ 2022 THANASORN.ALL RIGHTS RESERVED.Ubon Ratchathani
          University
        </Typography>
      </Toolbar> */}
    </div>
  );
}

export default Footer;