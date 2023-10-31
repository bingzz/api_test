import { useEffect, useState } from "react";

function useLogs() {
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    console.log('Log Added:', log);
  }, [log]);

  return [log, setLog] as const;
}

export default useLogs;