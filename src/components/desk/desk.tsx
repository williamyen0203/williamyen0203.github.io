import React, { useEffect } from "react";
import './desk.css';

type DeskProps = {
  className: string
}

const DESK_HEIGHT_PERCENTAGE = 0.25;

export default function Desk({ className }: DeskProps) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  return (
    <div
      className={`desk ${className}`}
      style={{
        height: dimensions.height * DESK_HEIGHT_PERCENTAGE,
        width: dimensions.width,
        top: dimensions.height * (1 - DESK_HEIGHT_PERCENTAGE),
        left: 0
      }}
    />
  )
}
