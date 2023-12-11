import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  fetchSuccess,
  pastForcast,
  reset,
} from "../features/forcast/forcastSlice";
import useForcast from "./useForcast";

function usePastForecast() {
  const [timeStamp, setTimeStamp] = useState();
  const dispatch = useDispatch();
  const coordinates = useSelector(
    (state) => state?.forcast?.forcast?.city?.coord
  );

  useEffect(() => {
    (async () => {
      if (coordinates?.lat && coordinates?.lon) {
        dispatch(fetchStart());
        const data = await fetch(
          `/api/forcast/past?lat=${coordinates?.lat}&lon=${coordinates?.lon}&date=${timeStamp}`
        );
        const dataJson = await data.json();
        console.log(dataJson);
        if (dataJson.cod === "400") {
          dispatch(pastForcast({ cod: 400, message: dataJson.message }));
        }
        dispatch(pastForcast(dataJson));
      }
    })();
  }, [timeStamp]);
  return { setTimeStamp };
}

export default usePastForecast;
