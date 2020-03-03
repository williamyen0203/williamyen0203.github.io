import { motion } from "framer-motion";
import React from "react";
import './mouse.css';

type MouseProps = {
  className: string;
}

const MOUSE_DIMENSION = 100;

export default function Mouse({ className }: MouseProps) {
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
      className={`mouse ${className}`}
      style={{
        height: MOUSE_DIMENSION,
        width: MOUSE_DIMENSION
      }}
    />
  )
}
