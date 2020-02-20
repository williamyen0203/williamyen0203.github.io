import React, { useEffect, useState } from "react";
import { MotionValue, motion } from "framer-motion";
import lamp_svg from './lamp-head.svg'
import './lamp-head.css'

type LampHeadProps = {
  yMotion: MotionValue;
  xMotion: MotionValue;
  lampSize: number;
}

export default function LampHead({ yMotion, xMotion, lampSize }: LampHeadProps) {
  const [xPos, setXPos] = useState(0);

  useEffect(() =>
    xMotion.onChange(() => {
      var xPos = xMotion.get();

      setXPos(-xPos);
    }),
    [xMotion]
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
        y: yMotion
      }}
    />
  )
}
