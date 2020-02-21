import React from "react";
import { useMotionValue } from "framer-motion"
import './lamp.css'
import LampHead from './parts/lamp-head/lamp-head'
import LampHeadJoint from './parts/lamp-head-joint/lamp-head-joint'
import LampBaseJoint from './parts/lamp-base-joint/lamp-base-joint'


const INITIAL_JOINT_LENGTH = 300;
const LAMP_HEAD_SQUARE_DIMENSION = 150;
const HANDLE_DIMENSION = 25;

export default function Lamp() {
  const headXMotion = useMotionValue(0);
  const headYMotion = useMotionValue(0);

  return (
    <div
      className="lamp-container"
      style={{
        height: INITIAL_JOINT_LENGTH,
        width: INITIAL_JOINT_LENGTH
      }}
    >
      <LampHead
        xMotion={headXMotion}
        yMotion={headYMotion}
        length={INITIAL_JOINT_LENGTH}
        lampSize={LAMP_HEAD_SQUARE_DIMENSION}
      />
      <LampHeadJoint
        xMotion={headXMotion}
        yMotion={headYMotion}
        length={INITIAL_JOINT_LENGTH}
      />
      <LampBaseJoint
        xMotion={headXMotion}
        length={INITIAL_JOINT_LENGTH}
        handleSize={HANDLE_DIMENSION}
      />
    </div>
  )
}
