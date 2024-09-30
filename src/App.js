import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="w-full flex gap-2 justify-center ">
      <div className="flex gap-3 flex-col">
        <h1>Index Component</h1>
        <Link to={"/class"}>Navigate to Class comp</Link>
        <Link to={"/function"}>Navigate to Function comp</Link>
      </div>
    </div>
  );
}

export default App;
