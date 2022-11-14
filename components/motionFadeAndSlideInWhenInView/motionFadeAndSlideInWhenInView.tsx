// reference to useImperativeHandle: https://reactjs.org/docs/hooks-reference.html#useimperativehandle
// better reference: https://medium.com/vimeo-engineering-blog/handling-internal-and-external-refs-to-the-same-element-with-useimperativehandle-in-react-746ff6d377fe
// component uses forwardRef beacuse it can be wrapped in next/Link component where as motionFadeInWhenInView uses forward ref to retrieve imageWrapper size of heroMedia component
// @see: https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component
import {
  CSSProperties,
  useEffect,
  useRef,
  Ref,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import styles from "@/styles/components/motionFadeAndSlideInWhenInView/motionFadeAndSlideInWhenInView.module.scss";

interface MotionFadeAndSlideInWhenInView {
  children?: React.ReactNode;
  className?: string;
  elementType?: "a";
  href?: string;
  initialTranslateX: 200 | -200;
  style?: CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionFadeAndSlideInWhenInView = forwardRef(
  (
    {
      children,
      className,
      elementType,
      href,
      initialTranslateX,
      style,
    }: MotionFadeAndSlideInWhenInView,
    forwardedRef: Ref<HTMLElement | null> | undefined
  ) => {
    let classNames: string = styles.motionFadeAndSlideInWhenInView;
    if (elementType && className) {
      classNames = `${styles.motionFadeAndSlideInWhenInView} ${styles[elementType]} ${className}`;
    } else if (elementType) {
      classNames = `${styles.motionFadeAndSlideInWhenInView} ${styles[elementType]}`;
    } else if (className) {
      classNames = `${styles.motionFadeAndSlideInWhenInView} ${className}`;
    }

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useImperativeHandle(forwardedRef, () => ref.current);

    const variants = {
      fadeIn: {
        opacity: 1,
        transition: {
          delay: 0.8,
          duration: 1,
          type: "spring",
        },
        translateX: 0,
      },
      initial: {
        opacity: 0,
        translateX: initialTranslateX,
      },
    };

    useEffect(() => {
      if (isInView) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        controls.start("fadeIn");
      }
    }, [controls, isInView]);

    if (elementType === "a") {
      return (
        <motion.a
          ref={ref}
          animate={controls}
          className={classNames}
          href={href}
          initial="initial"
          style={style}
          variants={variants}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div
        ref={ref}
        animate={controls}
        className={classNames}
        initial="initial"
        style={style}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }
);

MotionFadeAndSlideInWhenInView.displayName = "MotionFadeAndSlideInWhenInView";

export default MotionFadeAndSlideInWhenInView;
