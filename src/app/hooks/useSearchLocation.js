import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function useSearchLocation(userInput) {
  const debouncedValue = useDebounce(userInput, 1500);
  const [suggestions, setSuggestions] = useState([]);
  const controller = new AbortController();
  useEffect(() => {
    (async () => {
      const signal = controller.signal;
      if (debouncedValue?.length >= 3) {
        const data = await fetch(`/api/search?q=${debouncedValue}`, {
          signal,
        });
        const dataJson = await data.json();
        setSuggestions(dataJson);
      }
    })();
    return () => {
      controller.abort("Cancel request");
    };
  }, [debouncedValue]);
  return { suggestions, setSuggestions };
}

export default useSearchLocation;
