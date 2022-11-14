import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import CONSTANTS from "@/lib/constants";
import styles from "@/styles/components/general/motionLinkUnderline.module.scss";

interface MotionLinkUnderline {
  className?: string;
  link: string;
  svgClassName?: string;
  text: string;
  variants?: Variants | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionLinkUnderline = ({
  className,
  link,
  svgClassName,
  text,
  variants,
}: MotionLinkUnderline) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} passHref>
      <motion.a
        className={className ? `${styles.parent} ${className}` : styles.parent}
        layout
        onBlur={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onMouseOver={() => setIsHovered(true)}
        variants={variants}
      >
        {text}
        <AnimatePresence exitBeforeEnter>
          {isHovered && (
            <motion.svg
              key={text}
              animate={{ opacity: 1 }}
              className={
                svgClassName
                  ? `${svgClassName} ${styles.svg} ${styles.motionSvg}`
                  : `${styles.svg} ${styles.motionSvg}`
              }
              exit={{ opacity: 0 }}
              height="2"
              initial={{ opacity: 0 }}
              layoutId="underline"
              transition={{
                delay: 0,
                duration: 0.3,
                ease: CONSTANTS.swing,
              }}
              width="100%"
            >
              <rect height="2" width="100%" />
            </motion.svg>
          )}
        </AnimatePresence>
        {className?.includes("active") && (
          <svg
            className={
              svgClassName ? `${svgClassName} ${styles.svg}` : styles.svg
            }
            height="2"
            width="100%"
          >
            <rect height="2" width="100%" />
          </svg>
        )}
      </motion.a>
    </Link>
  );
};

export default MotionLinkUnderline;
