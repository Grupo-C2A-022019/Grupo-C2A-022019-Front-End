import React, { useCallback } from "react";
import useI18n from "hooks/useI18n";
import { Select, MenuItem } from "@material-ui/core";

import I18n from "components/commons/I18n";

export default function LanguageSelector() {
  const { currentLang, langs, setLang } = useI18n();

  const handleChange = useCallback(({ target: { value } }) => setLang(value), [
    setLang
  ]);

  return (
    <Select value={currentLang} onChange={handleChange}>
      {langs.map(lang => (
        <MenuItem key={lang} value={lang}>
          <I18n id={`language.${lang}`} />
        </MenuItem>
      ))}
    </Select>
  );
}
