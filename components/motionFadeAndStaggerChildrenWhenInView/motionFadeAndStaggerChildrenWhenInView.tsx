// this should go in an hoc/ directory
import {
  Children,
  // cloneElement,
  isValidElement,
  ReactChild,
  ReactFragment,
  ReactNode,
  ReactPortal,
  useEffect,
  useRef,
} from "react";
import {
  motion,
  useAnimationControls,
  useInView,
  Variants,
} from "framer-motion";
import CONSTANTS from "@/lib/constants";
import styles from "@/styles/components/motionFadeAndStaggerChildrenWhenInView/motionFadeAndStaggerChildrenWhenInView.module.scss";
// import { render } from "react-dom";

interface MotionFadeAndStaggerChildrenWhenInView {
  childVariants?: Variants;
  children: ReactNode;
  childrenClassName?: string;
  className?: string;
  consumeFirstChild?: boolean;
  parentVariants?: Variants;
}

type Child = ReactChild | ReactFragment | ReactPortal;

const variantsAppliedToParent = {
  fadeInAndStagger: {
    transition: {
      delayChildren: 0.3,
      ease: CONSTANTS.swing,
      staggerChildren: 0.2,
    },
  },
  initial: {
    transition: {
      ease: CONSTANTS.swing,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const variantsAppliedToChild = {
  fadeInAndStagger: {
    opacity: 1,
    transition: {
      ease: CONSTANTS.swing,
      y: { stiffness: 1000, velocity: -100 },
    },
    y: 0,
  },
  initial: {
    opacity: 0,
    transition: {
      ease: CONSTANTS.swing,
      y: { stiffness: 1000 },
    },
    y: 50,
  },
};

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionFadeAndStaggerChildrenWhenInView = ({
  childVariants = variantsAppliedToChild,
  childrenClassName,
  children,
  className,
  consumeFirstChild,
  parentVariants = variantsAppliedToParent,
}: MotionFadeAndStaggerChildrenWhenInView) => {
  const childrenArray = Children.toArray(children);

  const parentClassNames = className
    ? `${styles.fadeAndStaggerParent} ${className}`
    : styles.fadeAndStaggerParent;

  const childrenClassNames =
    childrenClassName !== undefined
      ? `${childrenClassName} ${styles.fadeAndStaggerChild}`
      : styles.fadeAndStaggerChild;

  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      controls.start("fadeInAndStagger");
    }
  }, [controls, isInView]);

  // @todo finish consume first child work
  if (consumeFirstChild) {
    //   let ParentElement;
    //   Children.map(childrenArray, (child: Child) => {
    //     if (!isValidElement(child)) return null;
    //     // const grandChildrenArray = child;
    //     // console.log("grandChildrenArray", grandChildrenArray);
    //     // if (isValidElement(child)) {
    //     const parentPropsClassName: string =
    //       // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    //       Object.hasOwn(child.props, "className") === true
    //         ? // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    //           (child.props.className as string)
    //         : "";
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    //     ParentElement = cloneElement(child, {
    //       ...child.props,
    //       className: parentPropsClassName
    //         ? `${parentClassNames} ${parentPropsClassName}`
    //         : parentClassNames,
    //       variants: parentVariants,
    //     });
    //   });
    //   return ParentElement;
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className={parentClassNames}
      initial="initial"
      variants={parentVariants}
    >
      {Children.map(childrenArray, (child: Child) => {
        if (!isValidElement(child)) return null;

        if (isValidElement(child)) {
          const childPropsClassName: string =
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, no-prototype-builtins
            child.props.hasOwnProperty("className") === true
              ? // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                (child.props.className as string)
              : "";

          const DynamicMotionComponent = motion(child.type);

          return (
            <DynamicMotionComponent
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...child.props}
              className={
                childPropsClassName
                  ? `${childrenClassNames} ${childPropsClassName}`
                  : childrenClassNames
              }
              variants={childVariants}
            />
          );
        }

        return null;
      })}
    </motion.div>
  );
};

export default MotionFadeAndStaggerChildrenWhenInView;
