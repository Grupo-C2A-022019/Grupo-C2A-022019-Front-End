import { string } from "prop-types";

import useI18n from "hooks/useI18n";

export default function I18n({ id, fallback }) {
  const { messages } = useI18n();

  return messages[id] || fallback;
}

I18n.propTypes = {
  id: string,
  fallback: string
};

I18n.defaultProps = {
  id: "",
  fallback: ""
};
