import { useMapContext } from "../../contexts/MapContext";

import "./WayPointSidebar.css";

export function WayPointSidebar() {
  const { wayPoints } = useMapContext();

  return (
    <div className="sidebars__waypoint-sidebar">
      <div className="waypoint-table">
        <div className="waypoint-table__header">
          <div className="waypoint-table__row">
            <div className="waypoint-table__cell id-cell">ID</div>
            <div className="waypoint-table__cell location-cell">X,Y</div>
            <div className="waypoint-table__cell control-cell">Remove?</div>
          </div>
        </div>
        {wayPoints.map((point) => (
          <div className="waypoint-table__row" key={point.id}>
            <div className="waypoint-table__cell id-cell">{point.id}</div>
            <div className="waypoint-table__cell location-cell">
              {`${point.x},${point.y}`}
            </div>
            <div className="waypoint-table__cell control-cell">
              <button>x</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
