import React from "react";
import {useMotionValue } from "framer-motion"
import './lamp.css'
import LampHead from './parts/lamp-head/lamp-head'
import LampJoint from './parts/lamp-joint/lamp-joint'

export default function Lamp() {
  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);

  return (
    <div className="lamp-container">
      <LampHead
        xMotion={xMotion}
        yMotion={yMotion}
      />
      <LampJoint
        xMotion={xMotion}
        yMotion={yMotion}
      />
    </div>
  )
}
