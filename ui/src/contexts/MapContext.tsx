import React, { createContext, useContext, useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

export type WayPoint = {
  id: string;
  x: number;
  y: number;
};

type MapContextState = {
  wayPoints: WayPoint[];
  addWayPoint: (pointX: number, pointY: number) => void;
  removeWayPoint: (pointId: string) => void;
};

const MapContext = createContext<MapContextState | undefined>(undefined);

interface MapContextProviderProps {
  initWayPoints?: WayPoint[];
  children?: React.ReactNode;
}

export function MapContextProvider({
  initWayPoints,
  children,
}: MapContextProviderProps) {
  const [wayPoints, setWayPoints] = useState<WayPoint[]>(initWayPoints ?? []);

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

  return (
    <MapContext.Provider value={{ wayPoints, addWayPoint, removeWayPoint }}>
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
