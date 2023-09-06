import "./Load.css";
import TerminalLine from "./component/TerminalLine";
import TerminalInput from "./component/TerminalInput";

function Load() {
  return (
    <div className="load">
      <TerminalLine path="usr/portfolio/loading" command="Bienvenue" />
      <TerminalLine
        path="usr/portfolio/loading"
        command="Entrez votre usernarme :"
      />
      <TerminalInput name="username" placeholder="username" />
    </div>
  );
}

export default Load;
