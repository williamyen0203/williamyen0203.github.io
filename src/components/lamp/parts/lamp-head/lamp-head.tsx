import React from "react";
import { MotionValue, motion } from "framer-motion";
import lamp_svg from './lamp-head.svg'
import './lamp-head.css'

type LampHeadProps = {
  xMotion: MotionValue;
  yMotion: MotionValue;
}

export default function LampHead({ xMotion, yMotion }: LampHeadProps) {
  return (
    <motion.img
      src={lamp_svg}
      className="lamp-head"
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      style={{
        x: xMotion,
        y: yMotion
      }}
    />
  )
}
