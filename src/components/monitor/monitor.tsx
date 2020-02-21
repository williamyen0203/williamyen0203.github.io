import { motion, useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import './monitor.css';
import monitor_svg from './monitor.svg';

const MONITOR_DIMENSION = 800;
const PERSPECTIVE_TIGHTNESS = 30;
const PERSPECTIVE_DISTANCE = 250;

export default function Monitor() {
  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);

  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  useEffect(() =>
    xMotion.onChange(() => {
      const x = xMotion.get();
      const tilt = clamp(x / PERSPECTIVE_TIGHTNESS, -1, 1);

      console.log(tilt);
      
      setTiltX(tilt);
    }),
    [xMotion, tiltX]
  );

  useEffect(() =>
    yMotion.onChange(() => {
      const y = yMotion.get();
      const tilt = clamp(y / PERSPECTIVE_TIGHTNESS, -1, 1);

      setTiltY(tilt);
    }),
    [yMotion, tiltY]
  );

  return (
    <div style={{perspective: PERSPECTIVE_DISTANCE}}>
      <motion.img
        src={monitor_svg}
        drag
        dragConstraints={{
          top: -0.5,
          bottom: 0.5,
          left: -0.5,
          right: 0.5
        }}
        dragElastic={0.05}
        dragMomentum={false}
        className="monitor"
        style={{
          height: MONITOR_DIMENSION,
          width: MONITOR_DIMENSION,
          x: xMotion,
          y: yMotion,
          rotateX: tiltY,
          rotateY: -tiltX
        }}
      />
    </div>
  )
}

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}