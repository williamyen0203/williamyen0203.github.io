import React, { useState, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";
import './lamp-head-joint.css'

type LampHeadJointProps = {
  xMotion: MotionValue;
  yMotion: MotionValue;
  length: number;
}

export default function LampHeadJoint({ xMotion, yMotion, length }: LampHeadJointProps) {
  const [angle, setAngle] = useState(0);
  const [xPos, setXPos] = useState(0);

  useEffect(() =>
    yMotion.onChange(() => {
      const y = yMotion.get();
      const angle = Math.atan(y / length) * (180 / Math.PI);;

      setAngle(angle);
    }),
    [yMotion, length]
  );

  useEffect(() =>
    xMotion.onChange(() => {
      const xPos = xMotion.get();

      setXPos(-xPos);
    }),
    [xMotion]
  );

  return (
    <motion.div
      className="lamp-head-joint"
      style={{
        left: -xPos,
        width: length,
        rotate: -angle
      }}
    />
  )
}
