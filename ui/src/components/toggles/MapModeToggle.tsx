import "./MapModeToggle.css";

export type MapMode = "CREATE" | "PLAY";

interface MapModeToggleProps {
  value: MapMode;
  onChange?: (newValue: MapMode) => void;
}

function isPlay(value: MapMode) {
  return value === "PLAY";
}

function isCreate(value: MapMode) {
  return !isPlay(value);
}

function getMode(value: boolean): MapMode {
  return value ? "PLAY" : "CREATE";
}

export function MapModeToggle({ value, onChange }: MapModeToggleProps) {
  return (
    <div className="toggles__map-mode-toggle">
      <label>
        <div className="control">
          <div
            className={`control__label ${
              isCreate(value) ? "control__label_selected" : ""
            }`}
          >
            Create waypoints
          </div>
          <div
            className={`control__label ${
              isPlay(value) ? "control__label_selected" : ""
            }`}
          >
            Start car
          </div>
        </div>
        <input
          type="checkbox"
          checked={isPlay(value)}
          onChange={(e) => {
            onChange?.(getMode(e.target.checked));
          }}
        />
      </label>

      <div className="info">
        {isCreate(value) && (
          <p>
            In this mode click on the map to create a series of waypoints, then
            press 'Start car' to watch the car travel the path.
          </p>
        )}
      </div>
    </div>
  );
}
