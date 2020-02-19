import React, { useState, useEffect } from "react";
import { MotionValue, motion } from "framer-motion";
import './lamp-joint.css'

type LampJointProps = {
  xMotion: MotionValue;
  yMotion: MotionValue;
}

export default function LampJoint({ xMotion, yMotion }: LampJointProps) {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  useEffect(() =>
    xMotion.onChange(() => {
      setXPos(xMotion.get());
      setYPos(yMotion.get());
    }),
    [xMotion, yMotion]
  );

  return (
    <motion.div
      className="lamp-joint"
      animate={{
        x: xPos,
        y: yPos
      }}
    >
      =========================
    </motion.div>
  )
}
