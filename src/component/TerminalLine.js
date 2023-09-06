import "./TerminalLine.css";

function TerminalLine(props) {
  return (
    <p className="terminal-line">
      {props.path}
      <span className="tilde"> ~ </span>
      {props.command}
    </p>
  );
}

export default TerminalLine;
