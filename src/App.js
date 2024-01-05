import "./styles.css";
import DataComponent from "./DataComponent.js";
import Graph from "./Graph.js";

export default function App() {
  return (
    <div className="App">
      <h1>SpaceVue Dashboard</h1>
      <Graph />
      <DataComponent />
    </div>
  );
}
