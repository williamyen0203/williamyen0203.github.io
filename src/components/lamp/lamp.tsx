import React from "react";
import { useMotionValue } from "framer-motion"
import './lamp.css'
import LampHead from './parts/lamp-head/lamp-head'
import LampHeadJoint from './parts/lamp-head-joint/lamp-head-joint'

export default function Lamp() {
  const headYMotion = useMotionValue(0);

  return (
    <div className="lamp-container">
      <LampHead
        yMotion={headYMotion}
      />
      <LampHeadJoint
        yMotion={headYMotion}
      />
    </div>
  )
}
