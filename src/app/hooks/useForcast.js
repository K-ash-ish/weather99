import { useEffect, useReducer, useState } from "react";
import useDebounce from "./useDebounce";
import { useDispatch } from "react-redux";
import { fetchSuccess } from "../features/forcast/forcastSlice";

function useForcast(userInput) {
  const debouncedValue = useDebounce(userInput, 1500);
  const controller = new AbortController();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const signal = controller.signal;
      if (debouncedValue?.length >= 3) {
        const data = await fetch(`/api/forcast?value=${debouncedValue}`, {
          signal,
        });
        const dataJson = await data.json();
        dispatch(fetchSuccess(dataJson));
      }
    })();
    return () => {
      controller.abort("Cancel request");
    };
  }, [debouncedValue]);
}

export default useForcast;
