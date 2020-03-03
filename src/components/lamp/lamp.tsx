import { useMotionValue } from "framer-motion";
import React from "react";
import './lamp.css';
import LampBaseJoint from './parts/lamp-base-joint/lamp-base-joint';
import LampBase from './parts/lamp-base/lamp-base';
import LampHeadJoint from './parts/lamp-head-joint/lamp-head-joint';
import LampHead from './parts/lamp-head/lamp-head';

type LampProps = {
  className: string;
}

const INITIAL_JOINT_LENGTH = 300;
const LAMP_HEAD_SQUARE_DIMENSION = 150;
const HANDLE_DIMENSION = 25;
const BASE_LENGTH = 200;

export default function Lamp({ className }: LampProps) {
  const headXMotion = useMotionValue(0);
  const headYMotion = useMotionValue(0);

  return (
    <div
      className={`lamp-container ${className}`}
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
      <LampBase
        baseLength={BASE_LENGTH}
        jointLength={INITIAL_JOINT_LENGTH}
      />
    </div>
  )
}
