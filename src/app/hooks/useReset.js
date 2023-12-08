import { useState } from "react";

function useReset() {
  const [resetBtn, setResetBtn] = useState(false);

  return { resetBtn, setResetBtn };
}

export default useReset;
