import "./Load.css";
import TerminalLine from "./component/TerminalLine";
import TerminalLoader from "./component/TerminalLoader";

function Load() {
  return (
    <div className="load">
      <TerminalLine path="usr/portfolio" command="Bienvenue" />
      <TerminalLoader />
    </div>
  );
}

export default Load;
