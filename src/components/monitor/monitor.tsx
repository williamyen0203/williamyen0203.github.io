import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import monitor_stand_svg from './monitor-stand.svg';
import './monitor.css';
import monitor_svg from './monitor.svg';

const MONITOR_WIDTH = 800;
const MONITOR_HEIGHT = MONITOR_WIDTH * (1080 / 1920);
const MONITOR_STAND_DIMENSION = 300
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
    <div className="monitor-container">
      <div
        className="monitor"
        style={{perspective: PERSPECTIVE_DISTANCE}}
      >
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
          style={{
            height: MONITOR_HEIGHT,
            width: MONITOR_WIDTH,
            x: xMotion,
            y: yMotion,
            rotateX: tiltY,
            rotateY: -tiltX
          }}
        />
      </div>
      <img
        className="monitor-stand"
        src={monitor_stand_svg}
        style={{
          height: MONITOR_STAND_DIMENSION,
          width: MONITOR_STAND_DIMENSION,
          top: (MONITOR_HEIGHT / 1.5),
          left: (MONITOR_WIDTH / 2) - (MONITOR_STAND_DIMENSION / 2)
        }}
        alt=""
      />
    </div>
  )
}

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}