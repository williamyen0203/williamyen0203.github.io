import { motion } from "framer-motion";
import React from "react";
import './lamp-base.css';

type LampBaseProps = {
  baseLength: number;
  jointLength: number;
}

export default function LampBase({ baseLength, jointLength }: LampBaseProps) {
  return (
    <motion.div
      className="lamp-base"
      style={{
        width: baseLength,
        left: jointLength - (baseLength / 2),
        top: jointLength
      }}
    >
    </motion.div>
  )
}
