import React, { useEffect, useState } from "react";
import { MotionValue, motion } from "framer-motion";
import lamp_svg from './lamp-head.svg'
import './lamp-head.css'

type LampHeadProps = {
  xMotion: MotionValue;
  yMotion: MotionValue;
  length: number;
  lampSize: number;
}

export default function LampHead({ xMotion, yMotion, length, lampSize }: LampHeadProps) {
  const [angle, setAngle] = useState(0);

  useEffect(() =>
    yMotion.onChange(() => {
      const RAD = 180 / Math.PI

      const y = yMotion.get();
      const angle = -Math.atan(y / length) * RAD

      setAngle(angle);
    }),
    [yMotion, length]
  );

  return (
    <motion.img
      src={lamp_svg}
      className="lamp-head"
      drag
      dragConstraints={{
        top: -100,
        bottom: 100,
        left: -100,
        right: 100
      }}
      dragElastic={0.2}
      dragMomentum={false}
      style={{
        width: lampSize,
        height: lampSize,
        top: -lampSize / 2,
        left: -lampSize / 2,
        rotate: `${angle}deg`,
        x: xMotion,
        y: yMotion
      }}
    />
  )
}
