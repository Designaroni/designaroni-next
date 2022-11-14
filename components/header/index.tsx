import {
  motion,
  useScroll,
  // useSpring,
  useTransform,
} from "framer-motion";
import { TopLevelPageNames } from "@/lib/api";
import Navigation from "@/components/navigation";
import Logo from "@/components/logo";
// import Search from '@/components/search';
import Social from "@/components/social";
import styles from "@/styles/components/header/header.module.scss";
import variables from "@/styles/variables.module.scss";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { toNumber } from "@/lib/helper-methods";

interface Header {
  topLevelPageNames: TopLevelPageNames;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Header = ({ topLevelPageNames }: Header) => {
  const mobileHeaderheight = toNumber(variables.mobileHeaderHeight);
  const headerHeight = toNumber(variables.headerHeight);
  const { isMobile } = useIsMobile();
  const initialTopValue = isMobile ? mobileHeaderheight : headerHeight;

  const { scrollY } = useScroll();
  const top = useTransform(scrollY, [0, 200], [initialTopValue, 0]);

  return (
    <motion.header className={styles.header} style={{ top }}>
      <Navigation
        className={styles.navigation}
        placement="header"
        topLevelPageNames={topLevelPageNames}
      />
      <Logo className={styles.logo} logotype="DESIGNARONI" placement="header" />
      {!isMobile && (
        /* <Search className={styles.search}></Search> */
        <Social className={styles.social} />
      )}
    </motion.header>
  );
};
export default Header;
