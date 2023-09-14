import React from "react";
import "./TerminalLoader.css";
import { Progress } from "@nextui-org/react";

function TerminalLoader() {
  const [value, setValue] = React.useState(0);
  const timeoutRef = React.useRef(null);
  let timeOut;
  let i = 0;

  const loading = () => {
    timeoutRef.current = setTimeout(() => {
      i++;
      setValue((v) => (v >= 100 ? 100 : v + 1));
      timeOut = Math.floor(Math.random() * (300 - 0)) + 1;
      if (i > 100) return;
      loading(); // Appel récursif pour continuer la mise à jour
    }, timeOut);
  };

  React.useEffect(() => {
    loading();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []); //

  return (
    <div className="terminal-loader">
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Barre de chargement"
        className="max-w-xl"
        color="success"
      />
      <p>{value} %</p>
    </div>
  );
}

export default TerminalLoader;
