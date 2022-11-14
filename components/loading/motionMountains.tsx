import { motion } from "framer-motion";
import CONSTANTS from "@/lib/constants";
import variables from "@/styles/variables.module.scss";

interface MotionMountains {
  animatedColor?: string;
  animatedStrokeWidth?: number;
  initialColor?: string;
  initialStrokeWidth?: number;
  size?: number;
}

interface MotionMountainsProps {
  animate: {
    color?: string;
    pathLength: number;
    strokeWidth: number[];
  };
  initial: {
    color?: string;
    pathLength: number;
    strokeWidth: number;
  };
  transition: {
    delay: number;
    delayChildren?: number;
    duration: number;
    ease:
      | number[]
      | [number, number, number, number]
      | "linear"
      | "easeIn"
      | "easeOut"
      | "easeInOut"
      | "circIn"
      | "circOut"
      | "circInOut"
      | "backIn"
      | "backOut"
      | "backInOut"
      | "anticipate";
    repeat: number; // number or Infinity
    repeatType: "reverse" | "loop" | "mirror" | undefined;
    staggerDirection?: number;
  };
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionMountains = ({
  size = 44,
  animatedStrokeWidth = 10,
  animatedColor = variables.mountainSage,
  initialColor = variables.blackBear,
  initialStrokeWidth = 0,
}: MotionMountains) => {
  const motionProps: MotionMountainsProps = {
    animate: {
      color: animatedColor,
      pathLength: 1,
      strokeWidth: [
        initialStrokeWidth,
        animatedStrokeWidth,
        initialStrokeWidth,
      ],
    },
    initial: {
      color: initialColor,
      pathLength: 0,
      strokeWidth: initialStrokeWidth,
    },
    transition: {
      delay: 0,
      duration: 0.8,
      ease: CONSTANTS.swing.reverse(),
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  return (
    <motion.svg
      fill={animatedColor}
      height={size}
      viewBox="0 0 256 256"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect fill="none" height="256" width="256" />
      <motion.circle
        cx="164"
        cy="52"
        fill="none"
        r="20"
        stroke={animatedColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={animatedStrokeWidth}
        {...motionProps}
      />
      <motion.path
        d="M8,200,81.1,75.7a8.1,8.1,0,0,1,13.8,0L168,200Z"
        fill="none"
        stroke={animatedColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={animatedStrokeWidth}
        {...motionProps}
      />
      <motion.line
        fill="none"
        stroke={animatedColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={animatedStrokeWidth}
        x1="50.4"
        x2="125.6"
        y1="128"
        y2="128"
        {...motionProps}
      />
      <motion.path
        d="M144.1,159.4l33-55.8a8.1,8.1,0,0,1,13.8,0L248,200H168"
        fill="none"
        stroke={animatedColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={animatedStrokeWidth}
        {...motionProps}
      />
    </motion.svg>
  );
};

export default MotionMountains;
