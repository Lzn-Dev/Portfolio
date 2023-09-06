import "./Load.css";
import TerminalLine from "./component/TerminalLine";

function Load() {
  return (
    <div className="load">
      <TerminalLine path="usr/portfolio/loading" command="Bienvenue" />
    </div>
  );
}

export default Load;
