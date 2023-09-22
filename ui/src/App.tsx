import { useEffect, useState } from "react";
import map from "./assets/city-map-vector-257842.jpg";
import carIcon from "./assets/car-2893.png";
import personIcon from "./assets/metaverse-person-12407.png";

import "./App.css";
import { MapMode, MapModeToggle } from "./components/toggles/MapModeToggle";
import { CreateMap } from "./components/maps/CreateMap";

function App() {
  const [mode, setMode] = useState<MapMode>("PLAY");

  useEffect(() => {
    console.log("new mode", mode);
  }, [mode]);

  return (
    <div id="container">
      {mode === "CREATE" ? <CreateMap /> : null}
      <div id="controls">
        <MapModeToggle value={mode} onChange={setMode} />
      </div>
    </div>
  );
}

export default App;
