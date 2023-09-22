import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

import map from "../../assets/city-map-vector-257842.jpg";
import carIcon from "../../assets/car-2893.png";
import { WayPoint, useMapContext } from "../../contexts/MapContext";

import "./Map.css";

export function PlayMap() {
  const { wayPoints } = useMapContext();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visiblePoints, setVisiblePoints] = useState<WayPoint[]>([
    wayPoints[0],
  ]);
  const timer = useRef<number>(0);
  const waiting = useRef<boolean>(false);
  // Just to mock an API call for the next waypoint
  const dataFetchIndex = useRef<number>(0);

  const currentPoint = visiblePoints[currentIndex];

  useEffect(() => {
    dataFetchIndex.current = 0;
    setVisiblePoints([wayPoints[0]]);
  }, []);

  // Fetch the next waypoint from our "api"
  useEffect(() => {
    timer.current = setInterval(() => {
      const nextPoint = wayPoints[++dataFetchIndex.current];

      if (!nextPoint) {
        clearInterval(timer.current);
        return;
      }
      const nextVisiblePoints = [...visiblePoints, nextPoint];
      setVisiblePoints(nextVisiblePoints);

      if (waiting.current) {
        setNextWayPoint();
      }
    }, 5000);

    return () => clearInterval(timer.current);
  }, [visiblePoints, currentIndex]);

  const setNextWayPoint = useCallback(() => {
    const nextPoint = visiblePoints[currentIndex + 1];

    if (!nextPoint) {
      waiting.current = true;
      return;
    }
    waiting.current = false;

    setCurrentIndex(currentIndex + 1);
  }, [currentIndex, visiblePoints]);

  return (
    <div className="maps__create-map map">
      <img src={map} width={1000} height={1000} />
      <motion.div
        initial={{
          left: 0,
          top: 0,
        }}
        animate={{
          left: currentPoint.x,
          top: currentPoint.y,
        }}
        transition={{ duration: 5, ease: "linear" }}
        style={{ position: "absolute" }}
        onAnimationComplete={() => setNextWayPoint()}
      >
        <img
          src={carIcon}
          className={`icon icon__car`}
          style={{ position: "static" }}
        />
      </motion.div>
    </div>
  );
}
