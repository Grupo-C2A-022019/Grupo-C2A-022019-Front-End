import React from "react";

export default function Profile({ name, email, image }) {
  return (
    <h1>
      {name}
      {email}
      <img alt="" src={image} />
    </h1>
  );
}
