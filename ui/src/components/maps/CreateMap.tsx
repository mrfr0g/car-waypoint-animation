import map from "../../assets/city-map-vector-257842.jpg";
import carIcon from "../../assets/car-2893.png";
import { useMapContext } from "../../contexts/MapContext";

import "./Map.css";

const CAR_ICON_WIDTH = 16;
const CAR_ICON_HEIGHT = 16;

export function CreateMap() {
  const {
    addWayPoint,
    removeWayPoint,
    wayPoints,
    shouldHighlight,
    setHighlightId,
  } = useMapContext();

  return (
    <div className="maps__create-map map">
      <img
        src={map}
        onClick={(e) => {
          const pointX = e.nativeEvent.offsetX - CAR_ICON_WIDTH / 2;
          const pointY = e.nativeEvent.offsetY - CAR_ICON_HEIGHT / 2;

          addWayPoint(pointX, pointY);
        }}
        width={1000}
        height={1000}
      />
      {wayPoints.map((point, n) => (
        <img
          key={`icon_${n}_${point.id}`}
          src={carIcon}
          className={`icon icon__car ${
            shouldHighlight(point.id) ? "icon__car_hover" : ""
          }`}
          style={{
            left: point.x,
            top: point.y,
          }}
          onClick={() => removeWayPoint(point.id)}
          onMouseOver={() => setHighlightId(point.id)}
          onMouseOut={() => setHighlightId("")}
        />
      ))}
    </div>
  );
}
