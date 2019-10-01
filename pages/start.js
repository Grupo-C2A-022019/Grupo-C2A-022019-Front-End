import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Slider from "../components/menuStart";
import ToolBar from "../components/ToolBar";
import dynamic from "next/dynamic";

import Link from "components/commons/Link";

const OpenStreetMap = dynamic(() => import("components/OpenStreetMap"), {
  ssr: false
});

export default function Start() {
  return (
    <div>
      <ToolBar />
      <br />
      <br />
      <Container>
        <Slider />
      </Container>
      <br />
      <br />
      <div
        style={{
          margin: "0 auto",
          width: "25%",
          height: "300px",
          display: "grid"
        }}
      >
        <OpenStreetMap lat={-34.6063623} lng={-58.3835828} />
      </div>
    </div>
  );
}
