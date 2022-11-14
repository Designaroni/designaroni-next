// ref https://codesandbox.io/s/framer-motion-usescroll-forked-d7jx0v
import { motion, useScroll } from "framer-motion";
import styles from "@/styles/components/general/motionProgressBar.module.scss";

const MotionProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles.progressBar}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default MotionProgressBar;
