import { useMapContext } from "../../contexts/MapContext";

import "./WayPointSidebar.css";

interface WayPointSidebarProps {
  allowRemove?: boolean;
}

export function WayPointSidebar({ allowRemove }: WayPointSidebarProps) {
  const { wayPoints, setHighlightId, removeWayPoint, reset } = useMapContext();

  return (
    <div className="sidebars__waypoint-sidebar">
      {wayPoints.length === 0 ? (
        <div className="waypoint-empty-state">
          No waypoints, add some by clicking on the map or{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              reset();
            }}
          >
            click here to reset
          </a>
          .
        </div>
      ) : (
        <div className="waypoint-table">
          <div className="waypoint-table__header">
            <div className="waypoint-table__row">
              <div className="waypoint-table__cell id-cell">ID</div>
              <div className="waypoint-table__cell location-cell">X,Y</div>
              {allowRemove ? (
                <div className="waypoint-table__cell control-cell">Remove?</div>
              ) : null}
            </div>
          </div>
          {wayPoints.map((point) => (
            <div
              className="waypoint-table__row"
              key={point.id}
              onMouseOver={() => setHighlightId(point.id)}
              onMouseOut={() => setHighlightId("")}
            >
              <div className="waypoint-table__cell id-cell">{point.id}</div>
              <div className="waypoint-table__cell location-cell">
                {`${point.x},${point.y}`}
              </div>
              {allowRemove ? (
                <div className="waypoint-table__cell control-cell">
                  <button onClick={() => removeWayPoint(point.id)}>x</button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
