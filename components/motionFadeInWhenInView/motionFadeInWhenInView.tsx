// reference to useImperativeHandle: https://reactjs.org/docs/hooks-reference.html#useimperativehandle
// better reference: https://medium.com/vimeo-engineering-blog/handling-internal-and-external-refs-to-the-same-element-with-useimperativehandle-in-react-746ff6d377fe
// component uses forward ref to retrieve imageWrapper size of heroMedia component where as MotionFadeAndSlideWhenInView uses forwardRef beacuse it can be wrapped in next/Link component

import { forwardRef, useEffect, useRef, Ref, useImperativeHandle } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import styles from "@/styles/components/motionFadeInWhenInView/motionFadeInWhenInView.module.scss";

interface MotionFadeInWhenInView {
  children?: React.ReactNode;
  className?: string;
  elementType?: "center" | "column" | "article"; // add section, row, p element support etc...
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionFadeInWhenInView = forwardRef(
  (
    { children, className, elementType }: MotionFadeInWhenInView,
    forwardedRef: Ref<HTMLDivElement | null> | undefined
  ) => {
    let classNames = styles.motionFadeInWhenInView;
    if (elementType && className) {
      classNames = `${styles.motionFadeInWhenInView} ${styles[elementType]} ${className}`;
    } else if (elementType) {
      classNames = `${styles.motionFadeInWhenInView} ${styles[elementType]}`;
    } else if (className) {
      classNames = `${styles.motionFadeInWhenInView} ${className}`;
    }

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useImperativeHandle(forwardedRef, () => ref.current);

    const variants = {
      fadeIn: {
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1,
          type: "spring",
        },
      },
      initial: { opacity: 0 },
    };

    useEffect(() => {
      if (isInView) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        controls.start("fadeIn");
      }
    }, [controls, isInView]);

    if (elementType === "article") {
      return (
        <motion.article
          ref={ref}
          animate={controls}
          className={classNames}
          initial="initial"
          variants={variants}
        >
          {children}
        </motion.article>
      );
    }

    return (
      <motion.div
        ref={ref}
        animate={controls}
        className={classNames}
        initial="initial"
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }
);

MotionFadeInWhenInView.displayName = "MotionFadeInWhenInView";

export default MotionFadeInWhenInView;
