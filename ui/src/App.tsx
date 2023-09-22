import { useEffect, useState } from "react";
import map from "./assets/city-map-vector-257842.jpg";
import carIcon from "./assets/car-2893.png";
import personIcon from "./assets/metaverse-person-12407.png";

import "./App.css";
import { MapMode, MapModeToggle } from "./components/toggles/MapModeToggle";

function App() {
  const [mode, setMode] = useState<MapMode>("PLAY");

  useEffect(() => {
    console.log("new mode", mode);
  }, [mode]);

  return (
    <div>
      <div id="map">
        <img src={map} />
        <img src={carIcon} id="car-icon" />
        <img src={personIcon} id="person-icon" />
      </div>
      <div id="controls">
        <MapModeToggle value={mode} onChange={setMode} />
      </div>
    </div>
  );
}

export default App;
