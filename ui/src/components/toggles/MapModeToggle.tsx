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
    <input
      className="toggles__map-mode-toggle"
      type="checkbox"
      checked={isChecked(value)}
      onChange={(e) => {
        onChange?.(getMode(e.target.checked));
      }}
    />
  );
}
