import { useEffect, useState } from "react";

function useDebounce(value, time) {
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);
  return debouncedValue;
}

export default useDebounce;
