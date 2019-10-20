import React, { useCallback } from "react";
import getConfig from "next/config";

import useAuth from "hooks/useAuth";

export default function FacebookLogin() {
  const {
    publicRuntimeConfig: { facebookAppId }
  } = getConfig();
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
        appId={facebookAppId}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    )
  );
}
