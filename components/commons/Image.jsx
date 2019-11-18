import React from "react";

export default function Image({ className, height, ...props }) {
  return (
    <div
      className={className}
      style={{
        height,
        overflow: "hidden",
        display: "grid",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <img {...props} />
    </div>
  );
}
