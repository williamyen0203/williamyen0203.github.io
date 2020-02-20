import React, { useEffect, useState } from "react";
import { MotionValue, motion } from "framer-motion";
import lamp_svg from './lamp-head.svg'
import './lamp-head.css'

type LampHeadProps = {
  yMotion: MotionValue;
  xMotion: MotionValue;
  length: number;
  lampSize: number;
}

export default function LampHead({ yMotion, xMotion, length, lampSize }: LampHeadProps) {
  const [xPos, setXPos] = useState(0);
  const [angle, setAngle] = useState(0);

  useEffect(() =>
    xMotion.onChange(() => {
      const x = xMotion.get();

      setXPos(-x);
    }),
    [xMotion]
  );

  useEffect(() =>
    yMotion.onChange(() => {
      const RAD = 180 / Math.PI

      const y = yMotion.get();
      const angle = -Math.atan(y / length) * RAD

      setAngle(angle);
    }),
    [yMotion]
  );

  return (
    <motion.img
      src={lamp_svg}
      className="lamp-head"
      drag="y"
      dragConstraints={{
        top: -100,
        bottom: 100,
      }}
      dragElastic={0.2}
      dragMomentum={false}
      style={{
        width: lampSize,
        height: lampSize,
        top: -lampSize / 2,
        left: -lampSize / 2 - xPos,
        rotate: `${angle}deg`,
        y: yMotion
      }}
    />
  )
}
