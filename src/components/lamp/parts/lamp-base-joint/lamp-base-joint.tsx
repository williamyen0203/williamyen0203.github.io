import React, { useState, useEffect } from "react";
import { motion, MotionValue } from "framer-motion";
import './lamp-base-joint.css'

type LampBaseJointProps = {
  xMotion: MotionValue;
  length: number;
  handleSize: number
}


export default function LampBaseJoint({ xMotion, length, handleSize }: LampBaseJointProps) {
  const [angle, setAngle] = useState(90);
  const [jointLength, setJointLength] = useState(length);

  useEffect(() =>
    xMotion.onChange(() => {
      const rad = 180 / Math.PI

      const x = xMotion.get();
      const atan = Math.atan(length / x) * rad;

      // [0, 180]
      const angle = (atan > 0) ? atan : atan - 180;
      setAngle(angle);

      const normalizedAngle = 90 - Math.abs(atan)
      const adjustedLength = length / Math.cos(normalizedAngle / rad);
      setJointLength(adjustedLength);
    }),
    [xMotion, length]
  );

  return (
    <React.Fragment>
      <motion.div
        className="joint-handle"
        drag="x"
        dragConstraints={{
          left: -100,
          right: 100,
        }}
        dragElastic={0.2}
        dragMomentum={false}
        style={{
          height: handleSize,
          width: handleSize,
          left: length - handleSize / 2,
          top: - handleSize / 4,
          x: xMotion
        }}
      />
      <motion.div
        className="lamp-base-joint"
        style={{
          top: length,
          left: length,
          width: jointLength,
          rotate: -angle
        }}
      />
    </React.Fragment>
  )
}
