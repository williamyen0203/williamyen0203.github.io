import { motion } from "framer-motion";
import React, { useRef } from "react";
import './vase.css';
import vase_svg from './vase.svg';
import LeafOne from './leaf1/leaf1';
import LeafTwo from './leaf2/leaf2';
import LeafThree from './leaf3/leaf3';

type VaseProps = {
  className: string
}

const VASE_DIMENSION = 200;

export default function Vase({ className }: VaseProps) {
  const leaf1Ref: any = useRef<typeof LeafOne>(null);
  const leaf2Ref: any = useRef<typeof LeafOne>(null);
  const leaf3Ref: any = useRef<typeof LeafOne>(null);

  function wiggleLeaves() {
    console.log(leaf1Ref)
    leaf1Ref.current.wiggle();
    leaf2Ref.current.wiggle();
    leaf3Ref.current.wiggle();
  }

  return (
    <motion.div
      onTap={wiggleLeaves}
      className={`vase-container ${className}`}>
        <motion.img
        src={vase_svg}
        className="vase"
        style={{
          height: VASE_DIMENSION,
          width: VASE_DIMENSION
        }}
      />
      <div
        className="leaf-container"
        style={{
          height: VASE_DIMENSION,
          width: VASE_DIMENSION,
          top: -VASE_DIMENSION * 0.875
        }}>
        <LeafOne ref={leaf1Ref} />
        <LeafTwo ref={leaf2Ref} />
        <LeafThree ref={leaf3Ref} />
      </div>
    </motion.div>
  )
}
