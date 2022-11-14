import Link from "next/link";
import { motion } from "framer-motion";
import CONSTANTS from "@/lib/constants";
import styles from "@/styles/components/general/motionLinkInline.module.scss";
import variables from "@/styles/variables.module.scss";
import { forwardRef, Ref } from "react";

interface MotionLinkInline {
  className?: string;
  hoverColor?: string;
  initialColor?: string;
  link: string;
  text: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionLinkInline = forwardRef(
  (
    { className, hoverColor, initialColor, link, text }: MotionLinkInline,
    ref: Ref<HTMLAnchorElement> | undefined
  ) => {
    const underlineVariants = {
      hover: {
        fill: hoverColor || variables.purpleMartin,
        height: "100%",
        transition: {
          delay: 0,
          duration: 0.3,
          ease: CONSTANTS.swing,
        },
      },
      initial: {
        fill: initialColor || variables.highCountry,
        height: 2,
        transition: {
          delay: 0,
          duration: 0.3,
          ease: CONSTANTS.swing,
        },
      },
    };

    return (
      <Link href={link} passHref>
        <motion.a
          ref={ref}
          animate="initial"
          className={
            className ? `${styles.parent} ${className}` : styles.parent
          }
          initial="initial"
          whileHover="hover"
        >
          {text}
          <motion.svg
            className={styles.svg}
            variants={underlineVariants}
            width="100%"
          >
            <rect height="100%" width="100%" />
          </motion.svg>
        </motion.a>
      </Link>
    );
  }
);

MotionLinkInline.displayName = "MotionLinkInline";

export default MotionLinkInline;
