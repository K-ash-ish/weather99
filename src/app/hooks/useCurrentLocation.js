import { useEffect, useState } from "react";
import useForcast from "./useForcast";

const useCurrentLocation = () => {
  const { setCoordinates } = useForcast();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates(() => {
        return { lat: latitude, lon: longitude };
      });
    });
  }, []);
};

export default useCurrentLocation;
