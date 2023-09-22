import { useEffect, useState } from "react";

import { MapMode, MapModeToggle } from "./components/toggles/MapModeToggle";
import { CreateMap } from "./components/maps/CreateMap";
import { MapContextProvider } from "./contexts/MapContext";

import "./App.css";
import { WayPointSidebar } from "./components/sidebars/WaypointSidebar";

function App() {
  const [mode, setMode] = useState<MapMode>("CREATE");

  useEffect(() => {
    console.log("new mode", mode);
  }, [mode]);

  return (
    <MapContextProvider>
      <div id="container">
        {mode === "CREATE" ? <CreateMap /> : null}
        <div className="controls">
          <MapModeToggle value={mode} onChange={setMode} />
          <WayPointSidebar />
        </div>
      </div>
    </MapContextProvider>
  );
}

export default App;
