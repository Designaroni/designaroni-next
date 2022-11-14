import {
  AnimationControls,
  motion,
  TargetAndTransition,
  Transition,
  VariantLabels,
  Variants,
} from "framer-motion";
import { forwardRef, Ref } from "react";
// import CONSTANTS from "@/lib/constants";

type SizeObject = {
  height: number;
  width: number;
};

interface MotionMobileIcon {
  animate?: boolean | TargetAndTransition | AnimationControls | VariantLabels;
  className?: string;
  color?: string;
  onClick?: () => void;
  size?: number | SizeObject;
}

interface LineProps {
  animate?: boolean | TargetAndTransition | AnimationControls | VariantLabels;
  color?: string;
  transition?: Transition;
  variants?: Variants;
  x1?: string;
  x2?: string;
  y1?: string;
  y2?: string;
}

const Line = ({
  animate,
  color,
  transition,
  variants,
  x1,
  x2,
  y1,
  y2,
}: LineProps) => (
  <motion.line
    animate={animate}
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="16"
    transition={transition}
    variants={variants}
    x1={x1}
    x2={x2}
    y1={y1}
    y2={y2}
  />
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionMobileIcon = forwardRef(
  (
    {
      animate,
      className,
      color,
      onClick,
      size = { height: 28, width: 35 },
    }: MotionMobileIcon,
    ref: Ref<SVGSVGElement> | undefined
  ) => {
    let height;
    let width;

    if (typeof size === "object") {
      height = size.height;
      width = size.width;
    } else {
      width = size;
      height = size;
    }

    return (
      <motion.svg
        ref={ref}
        className={className}
        fill={color}
        height={height}
        onClick={onClick}
        viewBox="0 0 320 256" // finish creating this calculation, make it dynamic based on size prop
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect fill="none" height="256" width="256" />
        <Line
          animate={animate}
          color={color}
          variants={{
            closed: { x1: 4, x2: 316, y1: 64, y2: 64 },
            open: { x1: 200, x2: 56, y1: 56, y2: 200 },
          }}
        />
        <Line
          animate={animate}
          color={color}
          transition={{ duration: 0.1 }}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          x1="4"
          x2="316"
          y1="128"
          y2="128"
        />
        <Line
          animate={animate}
          color={color}
          variants={{
            closed: { x1: 4, x2: 316, y1: 192, y2: 192 },
            open: { x1: 200, x2: 56, y1: 200, y2: 56 },
          }}
        />
      </motion.svg>
    );
  }
);

MotionMobileIcon.displayName = "MotionMobileIcon";

export default MotionMobileIcon;
