import React from "react";
import "./TerminalLoader.css";
import { Progress } from "@nextui-org/react";

function TerminalLoader() {
  const [value, setValue] = React.useState(0);
  const [num, setNum] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 1));
      setNum(Math.floor(Math.random() * (40000000000 - 20000000 + 1)) + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-loader">
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Barre de chargement"
        className="max-w-xl"
        color="success"
      />
      <p>
        {value} % {num}
      </p>
    </div>
  );
}

export default TerminalLoader;
