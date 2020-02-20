import React, { useState, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";
import './lamp-head-joint.css'

type LampHeadJointProps = {
  yMotion: MotionValue;
  xMotion: MotionValue;
  length: number;
}

export default function LampHeadJoint({ yMotion, xMotion, length }: LampHeadJointProps) {
  const [angle, setAngle] = useState(0);
  const [xPos, setXPos] = useState(0);

  // Angle
  useEffect(() =>
    yMotion.onChange(() => {
      var y = yMotion.get();
      var angle = Math.atan(y / length) * (180 / Math.PI);;

      setAngle(angle);
    }),
    [yMotion, length]
  );

  // Horizontal movement
  useEffect(() =>
    xMotion.onChange(() => {
      var xPos = xMotion.get();

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
