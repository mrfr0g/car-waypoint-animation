import React, { createContext, useContext, useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import initialWayPoints from "./initialWayPoints.json";

export type WayPoint = {
  id: string;
  x: number;
  y: number;
};

type MapContextState = {
  wayPoints: WayPoint[];
  addWayPoint: (pointX: number, pointY: number) => void;
  removeWayPoint: (pointId: WayPoint["id"]) => void;
  setHighlightId: (pointId: WayPoint["id"]) => void;
  shouldHighlight: (pointId: WayPoint["id"]) => boolean;
  reset: () => void;
};

const MapContext = createContext<MapContextState | undefined>(undefined);

interface MapContextProviderProps {
  children?: React.ReactNode;
}

export function MapContextProvider({ children }: MapContextProviderProps) {
  const [wayPoints, setWayPoints] = useState<WayPoint[]>(initialWayPoints);
  const [highlightId, setHighlightId] = useState<WayPoint["id"]>("");

  const addWayPoint = useCallback(
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

  const removeWayPoint = useCallback(
    (pointId: string) => {
      const newWayPoints = wayPoints.filter(
        (currentPoint) => currentPoint.id !== pointId
      );
      setWayPoints(newWayPoints);
    },
    [wayPoints, setWayPoints]
  );

  const shouldHighlight = useCallback(
    (pointId: WayPoint["id"]) => pointId === highlightId,
    [highlightId, wayPoints]
  );

  const reset = useCallback(() => {
    setWayPoints(initialWayPoints);
    setHighlightId("");
  }, [setWayPoints, setHighlightId]);

  return (
    <MapContext.Provider
      value={{
        wayPoints,
        addWayPoint,
        removeWayPoint,
        setHighlightId,
        shouldHighlight,
        reset,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error("useMapContext must be used within a MapContextProvider");
  }
  return context;
};
