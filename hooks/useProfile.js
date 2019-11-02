import { useState, useEffect } from "react";
import useApi from "./useApi";

export default function useProfile() {
  const api = useApi();
  const [profile, setProfile] = useState();

  useEffect(() => {
    api.fetchProfile().then(setProfile);
  }, [api]);

  return [profile];
}
