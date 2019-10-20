import React, { useCallback } from "react";
import getConfig from "next/config";
import FacebookLogin from "react-facebook-login";

import useAuth from "hooks/useAuth";

export default function FacebookLoginButton() {
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
        appId={facebookAppId}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    )
  );
}
