import { useEffect, useState } from "react";

import { MapMode, MapModeToggle } from "./components/toggles/MapModeToggle";
import { CreateMap } from "./components/maps/CreateMap";
import { MapContextProvider } from "./contexts/MapContext";

import "./App.css";

function App() {
  const [mode, setMode] = useState<MapMode>("PLAY");

  useEffect(() => {
    console.log("new mode", mode);
  }, [mode]);

  return (
    <MapContextProvider>
      <div id="container">
        {mode === "CREATE" ? <CreateMap /> : null}
        <div id="controls">
          <MapModeToggle value={mode} onChange={setMode} />
        </div>
      </div>
    </MapContextProvider>
  );
}

export default App;
