import { motion } from "framer-motion";
import React from "react";
import './mouse.css';

const MOUSE_DIMENSION = 100;

export default function Mouse() {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -25,
        bottom: 25,
        left: -50,
        right: 50
      }}
      dragElastic={0.2}
      dragMomentum={false}
      className="mouse"
      style={{
        height: MOUSE_DIMENSION,
        width: MOUSE_DIMENSION
      }}
    />
  )
}
