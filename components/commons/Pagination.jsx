import React, { useCallback } from "react";
import { Button } from "@material-ui/core";
import I18n from "./I18n";

export default function Pagination({ current, total, onChange }) {
  const next = useCallback(() => onChange(current + 1), [current, onChange]);
  const prev = useCallback(() => onChange(current - 1), [current, onChange]);

  return (
    <>
      <Button onClick={prev} disabled={current <= 0}>
        <I18n id="previous" />
      </Button>
      <Button onClick={next} disabled={current >= total}>
        <I18n id="next" />
      </Button>
    </>
  );
}
