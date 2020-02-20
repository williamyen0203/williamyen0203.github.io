import React from "react";
import { MotionValue, motion } from "framer-motion";
import lamp_svg from './lamp-head.svg'
import './lamp-head.css'

type LampHeadProps = {
  yMotion: MotionValue;
}

export default function LampHead({
  yMotion
}: LampHeadProps) {
  return (
    <motion.img
      src={lamp_svg}
      className="lamp-head"
      drag="y"
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      dragElastic={0.2}
      dragMomentum={false}
      style={{
        y: yMotion
      }}
    />
  )
}
