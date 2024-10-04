import { Link } from "react-router-dom";
import "./App.css";
import ContextComp, { A, B, C, D } from "./components/ContextComp";

function App() {
  return (
    <div className="w-full h-screen flex flex-row gap-4 justify-center items-center">
      <ContextComp>
        <A />
        <B />
        <C />
        <D />
      </ContextComp>
    
    </div>
  );
}

export default App;
