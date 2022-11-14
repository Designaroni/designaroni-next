// convert LinkSlide to MotionLinkSlide
import Link from "next/link";
import styles from "@/styles/components/general/linkSlide.module.scss";

interface LinkSlide {
  children?: React.ReactNode;
  className?: string;
  link: string;
  text: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const LinkSlide = ({ children, className, link, text }: LinkSlide) => (
  <Link href={link}>
    <a className={className ? `${styles.parent} ${className}` : styles.parent}>
      {text}
      {children}
      <svg className={styles.svg} height="100%" width="100%">
        <rect height="100%" width="100%" />
      </svg>
    </a>
  </Link>
);

export default LinkSlide;
