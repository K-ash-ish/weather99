import { useEffect, useReducer, useState } from "react";
import useDebounce from "./useDebounce";
import { useDispatch } from "react-redux";
import { fetchSuccess } from "../features/forcast/forcastSlice";

function useForcast(userInput) {
  const debouncedValue = useDebounce(userInput, 1500);
  const dispatch = useDispatch();
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      if (debouncedValue?.length >= 3) {
        console.log(debouncedValue);
        const data = await fetch(`/api/forcast?value=${debouncedValue}`);
        const dataJson = await data.json();
        dispatch(fetchSuccess(dataJson));
      }
    })();
  }, [debouncedValue]);

  return data;
}

export default useForcast;
