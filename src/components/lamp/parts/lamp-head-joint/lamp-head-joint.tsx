import React, { useState, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";
import './lamp-head-joint.css'

type LampHeadJointProps = {
  yMotion: MotionValue;
}

const WIDTH = 200;

export default function LampHeadJoint({ yMotion }: LampHeadJointProps) {
  const [angle, setAngle] = useState(0);

  useEffect(() =>
    yMotion.onChange(() => {
      var y = yMotion.get();
      var angle = Math.atan(y / WIDTH) * (180 / Math.PI);;

      setAngle(angle);
    }),
    [yMotion]
  );

  return (
    <motion.div
      className="lamp-joint"
      style={{
        width: `${WIDTH}px`,
        rotate: -angle
      }}
    />
  )
}
