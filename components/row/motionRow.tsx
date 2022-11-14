import {
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  Variants,
  motion,
} from "framer-motion";
import styles from "@/styles/components/row/motionRow.module.scss";

interface MotionRow {
  animate?:
    | boolean
    | AnimationControls
    | TargetAndTransition
    | VariantLabels
    | undefined;
  children?: React.ReactNode;
  className?: string;
  elementType?: "div" | "p" | "largeP"; // expand in future use cases where element will div | span etc...
  variants?: Variants | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionRow = ({
  animate,
  children,
  className,
  elementType,
  variants,
}: MotionRow) => {
  let classNames = styles.row;

  if (elementType && className) {
    classNames = `${styles.row} ${styles[elementType]} ${className}`;
  } else if (elementType) {
    classNames = `${styles.row} ${styles[elementType]}`;
  } else if (className) {
    classNames = `${styles.row} ${className}`;
  }

  if (elementType === "p" || elementType === "largeP") {
    return (
      <motion.p animate={animate} className={classNames} variants={variants}>
        {children}
      </motion.p>
    );
  }

  return (
    <motion.div animate={animate} className={classNames} variants={variants}>
      {children}
    </motion.div>
  );
};

export default MotionRow;
