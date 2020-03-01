import { motion, useAnimation } from "framer-motion";
import React, { forwardRef, useImperativeHandle } from "react";
import leaf3_svg from './leaf3.svg';
import './leaf3.css';

const LEAF_DIMENSION = 175;

const LeafThree = forwardRef((_, ref: any) => {
  const animateWiggle = useAnimation()

  useImperativeHandle(ref, () => ({
    wiggle() {
      animateWiggle.start({ rotate: [0, 2, 0], transition: { duration: 0.5, ease: "easeInOut" } });
    }
  }));

  return (
    <motion.img
      src={leaf3_svg}
      className="leaf3"
      style={{
        height: LEAF_DIMENSION,
        width: LEAF_DIMENSION,
        left: LEAF_DIMENSION / 2
      }}
      animate={animateWiggle}
    />
  )
});

export default LeafThree;