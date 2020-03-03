import { motion, useAnimation } from "framer-motion";
import React, { forwardRef, useImperativeHandle } from "react";
import leaf1_svg from './leaf1.svg';
import './leaf1.css';

const LEAF_DIMENSION = 150;

const LeafOne = forwardRef((_, ref: any) => {
  const animateWiggle = useAnimation()

  useImperativeHandle(ref, () => ({
    wiggle() {
      animateWiggle.start({ rotate: [0, 2, 0], transition: { duration: 0.5, ease: "easeInOut" } });
    }
  }));

  return (
    <motion.img
      src={leaf1_svg}
      className="leaf1"
      style={{
        height: LEAF_DIMENSION,
        width: LEAF_DIMENSION,
        left: -LEAF_DIMENSION / 2
      }}
      animate={animateWiggle}
    />
  )
});

export default LeafOne;