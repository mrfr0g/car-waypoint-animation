import { useState } from "react";

import { MapMode, MapModeToggle } from "./components/toggles/MapModeToggle";
import { CreateMap } from "./components/maps/CreateMap";
import { MapContextProvider } from "./contexts/MapContext";
import { WayPointSidebar } from "./components/sidebars/WayPointSidebar";

import "./App.css";
import { PlayMap } from "./components/maps/PlayMap";

function App() {
  const [mode, setMode] = useState<MapMode>("CREATE");

  return (
    <MapContextProvider>
      <div id="container">
        {mode === "CREATE" ? <CreateMap /> : <PlayMap />}
        <div className="controls">
          <MapModeToggle value={mode} onChange={setMode} />
          <WayPointSidebar allowRemove={mode === "CREATE"} />
        </div>
      </div>
    </MapContextProvider>
  );
}

export default App;
