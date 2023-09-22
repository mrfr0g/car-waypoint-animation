import { useState } from "react";
import map from "./assets/city-map-vector-257842.jpg";
import carIcon from "./assets/car-2893.png";
import personIcon from "./assets/metaverse-person-12407.png";

import "./App.css";

type MapMode = "CREATE" | "PLAY";

function App() {
  const [mode, setMode] = useState<MapMode>("PLAY");

  return (
    <div>
      <div id="map">
        <img src={map} />
        <img src={carIcon} id="car-icon" />
        <img src={personIcon} id="person-icon" />
      </div>
      <div id="controls">
        <input type="checkbox" />
      </div>
    </div>
  );
}

export default App;
