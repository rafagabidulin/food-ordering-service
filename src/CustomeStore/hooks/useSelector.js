import { useContext, useEffect, useId, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";

export const useSelector = (selector) => {
  const store = useContext(StoreContext);
  const key = useId();
  const [value, setValue] = useState();

  useEffect(
    () =>
      store.subscribe(key, (state) => {
        setValue(selector(state));
      }),
    []
  );

  return value;
};
