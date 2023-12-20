import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

function IndexContainer() {
  return (
    <div style={{height:"100vh"}}>
      <CssBaseline />
      <Container style={{height:"100vh"}}>
        <Typography style={{height:"100vh"}}></Typography>
      </Container>
    </div>
  );
}

export default IndexContainer;