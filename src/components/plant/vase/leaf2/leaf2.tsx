import { motion, useAnimation } from "framer-motion";
import React, { forwardRef, useImperativeHandle } from "react";
import leaf2_svg from './leaf2.svg';
import './leaf2.css';

const LEAF_DIMENSION = 250;

const LeafTwo = forwardRef((_, ref: any) => {
  const animateWiggle = useAnimation()

  useImperativeHandle(ref, () => ({
    wiggle() {
      animateWiggle.start({ rotate: [0, -2, 0], transition: { duration: 0.5, ease: "easeInOut" } });
    }
  }));

  return (
    <motion.img
      src={leaf2_svg}
      className="leaf2"
      style={{
        height: LEAF_DIMENSION,
        width: LEAF_DIMENSION,
        left: -LEAF_DIMENSION / 6
      }}
      animate={animateWiggle}
    />
  )
});

export default LeafTwo;