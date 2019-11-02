import React from "react";

export default function Profile({ name, email }) {
  return (
    <h1>
      {name}
      {email}
    </h1>
  );
}
