import { useState, useCallback } from "react";

const useBooleanControl = (initialValue: boolean = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => setState((prev) => !prev), []);
  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);

  return { state, toggle, setTrue, setFalse, setState };
};

export default useBooleanControl;
