import { useRouter } from "next/router";
import { TopLevelPageNames } from "@/lib/api";
import LinkUnderline from "@/components/general/linkUnderline";
import MotionLinkUnderline from "@/components/general/motionLinkUnderline";
import { lowercaseStringAsURL, toNumber } from "@/lib/helper-methods";
import styles from "@/styles/components/navigation/navigation.module.scss";
import linkUnderlineStyles from "@/styles/components/general/linkUnderline.module.scss";
import useIsMobile from "@/lib/hooks/useIsMobile";
// MobileHeaderLinks
import { motion, useCycle, useTransform, useScroll } from "framer-motion";
import useDimensions from "@/lib/hooks/useDimensions";
import variables from "@/styles/variables.module.scss";
import MotionMobileIcon from "@/components/navigation/motionMobileIcon";
import { useEffect, useRef, useState } from "react";
import MotionSocial from "@/components/social/motionSocial";
import CONSTANTS from "@/lib/constants";
//
interface Navigation {
  className?: string;
  placement: "header" | "footer";
  topLevelPageNames: TopLevelPageNames;
}

interface TLPLinks {
  path: string;
  topLevelPageNames: TopLevelPageNames;
}

function isActive(path: string, name?: string) {
  if ((!name && path === "/") || (name && path.includes(name))) {
    return `${styles.active} ${linkUnderlineStyles.active}`;
  }

  return "";
}

const DesktopHeaderLinks = ({ path, topLevelPageNames }: TLPLinks) => (
  <>
    <MotionLinkUnderline className={isActive(path)} link="/" text="Home" />
    {topLevelPageNames.map((name, index) => {
      if (index <= 3) {
        return (
          <MotionLinkUnderline
            key={name}
            className={isActive(path, lowercaseStringAsURL(name))}
            link={lowercaseStringAsURL(name)}
            text={name}
          />
        );
      }

      return null;
    })}
  </>
);

const MobileHeaderLinks = ({ path, topLevelPageNames }: TLPLinks) => {
  const mobileHeaderheight = toNumber(variables.mobileHeaderHeight);
  const headerHeight = toNumber(variables.headerHeight);
  const { isMobile } = useIsMobile();
  const initialTopValue = isMobile ? mobileHeaderheight : headerHeight;
  const { scrollY } = useScroll();
  const top = useTransform(scrollY, [0, 200], [initialTopValue, 0]);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { windowWidth: width, windowHeight: height } = useDimensions();
  const motionMobileIconRef = useRef<SVGSVGElement | null>(null);
  const motionMobileIcon = motionMobileIconRef.current;
  const [mobileNavigationPaddingTop, setMobileNavigationPaddingTop] =
    useState(171);

  useEffect(() => {
    if (motionMobileIcon !== null) {
      setMobileNavigationPaddingTop(
        motionMobileIcon.getBoundingClientRect().bottom
      );
    }
  }, [isOpen, motionMobileIcon]);

  // update to use CONSTANTS swing
  const mobileNavigationBackground = {
    closed: {
      height,
      transition: {
        damping: 40,
        delay: 0.5,
        ease: CONSTANTS.swing,
        stiffness: 400,
        type: "spring",
      },
      width: 0,
    },
    open: {
      height,
      transition: {
        damping: 40,
        ease: CONSTANTS.swing,
        stiffness: 400,
        type: "spring",
      },
      width,
    },
  };

  const linkWrapperVariants = {
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

  const linkVariants = {
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

  return (
    <>
      <MotionMobileIcon
        ref={motionMobileIconRef}
        animate={isOpen ? "open" : "closed"}
        className={styles.mobileNavigationButtton}
        color={variables.primaryFontColor}
        onClick={() => toggleOpen()}
        size={{ height: 28, width: 35 }}
      />
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className={styles.mobileNavigation}
        custom={height}
        initial={false}
        style={{
          paddingTop: mobileNavigationPaddingTop,
        }}
        variants={mobileNavigationBackground}
      >
        <MotionSocial
          className={styles.mobileNavigationSocial}
          style={{ top, width }}
        />
        <motion.div
          className={styles.mobileLinkWrapper}
          variants={linkWrapperVariants}
        >
          <MotionLinkUnderline
            className={`${isActive(path)} ${styles.mobileLink}`}
            link="/"
            text="Home"
            variants={linkVariants}
          />
          {topLevelPageNames.map((name, index) => {
            if (index <= 3) {
              return (
                <MotionLinkUnderline
                  key={name}
                  className={`${isActive(path, lowercaseStringAsURL(name))} ${
                    styles.mobileLink
                  }`}
                  link={lowercaseStringAsURL(name)}
                  text={name}
                  variants={linkVariants}
                />
              );
            }

            return null;
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

const FooterLinks = ({ path, topLevelPageNames }: TLPLinks) => (
  <>
    {topLevelPageNames.map((name) => (
      <LinkUnderline
        key={name}
        className={isActive(path, lowercaseStringAsURL(name))}
        link={lowercaseStringAsURL(name)}
        text={name}
      />
    ))}
  </>
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Navigation = ({
  className,
  placement,
  topLevelPageNames,
}: Navigation) => {
  const { asPath: path } = useRouter();
  const { isMobile } = useIsMobile();

  return (
    <nav
      className={
        className ? `${styles.navigation} ${className}` : styles.navigation
      }
    >
      {placement === "header" &&
        (isMobile ? (
          <MobileHeaderLinks
            path={path}
            topLevelPageNames={topLevelPageNames}
          />
        ) : (
          <DesktopHeaderLinks
            path={path}
            topLevelPageNames={topLevelPageNames}
          />
        ))}
      {placement === "footer" && (
        <FooterLinks path={path} topLevelPageNames={topLevelPageNames} />
      )}
    </nav>
  );
};
export default Navigation;
