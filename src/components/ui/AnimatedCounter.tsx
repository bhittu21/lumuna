"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useSpring, useMotionValue } from "framer-motion";

export function AnimatedCounter({ 
  value, 
  duration = 2,
  prefix = "",
  suffix = ""
}: { 
  value: number; 
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Intl.NumberFormat("en-US").format(Math.floor(latest)));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
}
