import React from "react";

export default function Image({ className, ...props }) {
  return (
    <div className={className}>
      <img {...props} width="100%" />
    </div>
  );
}
