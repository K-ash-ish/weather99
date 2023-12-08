import { useEffect, useReducer, useState } from "react";
import useDebounce from "./useDebounce";
import { useDispatch } from "react-redux";
import { fetchStart, fetchSuccess } from "../features/forcast/forcastSlice";

function useForcast() {
  const [coordinates, setCoordinates] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (coordinates?.lat && coordinates?.lon) {
        dispatch(fetchStart());
        const data = await fetch(
          `/api/forcast?lat=${coordinates?.lat}&lon=${coordinates?.lon}`
        );
        const dataJson = await data.json();
        console.log(dataJson);
        dispatch(fetchSuccess(dataJson));
      }
    })();
  }, [coordinates]);
  return { setCoordinates };
}

export default useForcast;
