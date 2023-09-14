import "./TerminalLine.css";
import ReadFile from "../utils/ReadFile.js";

function TerminalLine(props) {
  const file = require("../divers/welcomeTranslate.txt");
  // Then pour executer le code une fois la promesse reçu.
  ReadFile.read(file).then((arr) => {
    arr.forEach((line) => console.log(line));
  });

  return (
    <p className="terminal-line">
      {props.path}
      <span className="tilde"> ~ </span>
      {props.command}
    </p>
  );
}

export default TerminalLine;
