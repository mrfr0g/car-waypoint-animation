import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

import map from "../../assets/city-map-vector-257842.jpg";
import carIcon from "../../assets/car-2893.png";

import "./Map.css";

type WayPoint = {
  id: string;
  x: number;
  y: number;
};

const CAR_ICON_WIDTH = 16;
const CAR_ICON_HEIGHT = 16;

export function CreateMap() {
  const [wayPoints, setWayPoints] = useState<WayPoint[]>([]);

  const handleDeleteWayPoint = useCallback(
    (pointId: string) => {
      const newWayPoints = wayPoints.filter(
        (currentPoint) => currentPoint.id !== pointId
      );
      setWayPoints(newWayPoints);
    },
    [wayPoints, setWayPoints]
  );

  const handleCreateWayPoint = useCallback(
    (pointX: number, pointY: number) => {
      const point: WayPoint = {
        id: uuid(),
        x: pointX,
        y: pointY,
      };

      const newWayPoints = [...wayPoints, point];

      setWayPoints(newWayPoints);
    },
    [wayPoints, setWayPoints]
  );

  return (
    <div id="create-map" className="map">
      <img
        src={map}
        onClick={(e) => {
          const pointX = e.nativeEvent.offsetX - CAR_ICON_WIDTH / 2;
          const pointY = e.nativeEvent.offsetY - CAR_ICON_HEIGHT / 2;

          handleCreateWayPoint(pointX, pointY);
        }}
      />
      {wayPoints.map((point, n) => (
        <img
          key={`icon_${n}_${point.id}`}
          src={carIcon}
          className="icon icon__car"
          style={{
            left: point.x,
            top: point.y,
          }}
          onClick={() => {
            handleDeleteWayPoint(point.id);
          }}
        />
      ))}
    </div>
  );
}
