import {
  YoutubeLogo,
  InstagramLogo,
  TiktokLogo,
  LinkedinLogo,
} from "phosphor-react";
import styles from "@/styles/components/social/social.module.scss";
import { motion, MotionStyle, Variants } from "framer-motion";
import { forwardRef, Ref } from "react";
import CONSTANTS from "@/lib/constants";

interface MotionSocial {
  className?: string;
  style?: MotionStyle;
  variants?: Variants;
}
const socialWrapperVariants = {
  closed: {
    transition: {
      ease: CONSTANTS.swing,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      ease: CONSTANTS.swing,
      staggerChildren: 0.07,
    },
  },
};

const socialLinkVariants = {
  closed: {
    opacity: 0,
    transition: {
      ease: CONSTANTS.swing,
      y: { stiffness: 1000 },
    },
    y: 50,
  },
  open: {
    opacity: 1,
    transition: {
      ease: CONSTANTS.swing,
      y: { stiffness: 1000, velocity: -100 },
    },
    y: 0,
  },
};

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionSocial = forwardRef(
  (
    { className, style, variants = socialLinkVariants }: MotionSocial,
    ref: Ref<HTMLDivElement> | undefined
  ) => (
    <motion.div
      ref={ref}
      className={className ? `${styles.social} ${className}` : styles.social}
      style={style}
      variants={socialWrapperVariants}
    >
      <motion.a
        className={styles.icon}
        href="https://www.youtube.com/channel/UCIH77UTZorw-xSK7h8mZfug"
        target="_blank"
        variants={variants}
      >
        <YoutubeLogo
          alt="Outbound link to Youtube"
          size={28}
          weight="duotone"
        />
      </motion.a>
      <motion.a
        className={styles.icon}
        href="https://instagram.com/designaroni"
        target="_blank"
        variants={variants}
      >
        <InstagramLogo
          alt="Outbound link to Instagram"
          size={28}
          weight="duotone"
        />
      </motion.a>
      <motion.a
        className={styles.icon}
        href="https://tiktok.com/@designaroni"
        target="_blank"
        variants={variants}
      >
        <TiktokLogo alt="Outbound link to TikTok" size={28} weight="duotone" />
      </motion.a>
      <motion.a
        className={styles.icon}
        href="https://www.linkedin.com/in/ian-roberts-designaroni"
        target="_blank"
        variants={variants}
      >
        <LinkedinLogo
          alt="Outbound link to LinkedIn"
          size={28}
          weight="duotone"
        />
      </motion.a>
    </motion.div>
  )
);

MotionSocial.displayName = "MotionSocial";

export default MotionSocial;
