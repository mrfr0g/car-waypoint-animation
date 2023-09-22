import "./MapModeToggle.css";

export type MapMode = "CREATE" | "PLAY";

interface MapModeToggleProps {
  value: MapMode;
  onChange?: (newValue: MapMode) => void;
}

function isChecked(value: MapMode) {
  return value === "PLAY";
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
              value === "CREATE" ? "control__label_selected" : ""
            }`}
          >
            Create waypoints
          </div>
          <div
            className={`control__label ${
              value === "PLAY" ? "control__label_selected" : ""
            }`}
          >
            Start car
          </div>
        </div>
        <input
          type="checkbox"
          checked={isChecked(value)}
          onChange={(e) => {
            onChange?.(getMode(e.target.checked));
          }}
        />
      </label>
    </div>
  );
}
