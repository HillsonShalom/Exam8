import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MissionsList from "./components/MissionsList";
import { Mission } from "./types/MissionModel";

function App() {
  const [missions, setMissions] = useState<Mission[]>([]);

  return (
    <>
      <div className="app">
        <h1 className="header">Military Operations Dashboard</h1>
        
        <Form missions={missions} setMissions={setMissions} />
        <MissionsList missions={missions} setMissions={setMissions} />
      </div>
    </>
  );
}

export default App;
