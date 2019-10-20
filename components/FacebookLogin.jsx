import React, { useCallback } from "react";

import useAuth from "hooks/useAuth";

export default function FacebookLogin() {
  const [{ jwtToken }, setAuth] = useAuth();
  const isLoggedIn = !!jwtToken;

  const responseFacebook = useCallback(
    ({ signedRequest }) => {
      setAuth({ jwtToken: signedRequest });
    },
    [setAuth]
  );

  return (
    !isLoggedIn && (
      <FacebookLogin
        autoLoad
        appId="663245730866918"
        fields="name,email,picture"
        callback={responseFacebook}
      />
    )
  );
}
