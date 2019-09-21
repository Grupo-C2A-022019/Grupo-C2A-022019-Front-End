import React from "react";

import dynamic from "next/dynamic";

const OpenStreetMap = dynamic(() => import("components/OpenStreetMap"), {
  ssr: false
});

export default function() {
  return (
    <div style={{ height: "100vh", display: "grid" }}>
      <OpenStreetMap lat={-34.6063623} lng={-58.3835828} />
    </div>
  );
}
