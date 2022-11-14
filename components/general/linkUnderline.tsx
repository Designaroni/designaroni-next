import Link from "next/link";
import styles from "@/styles/components/general/linkUnderline.module.scss";

interface LinkUnderline {
  className?: string;
  link: string;
  text: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const LinkUnderline = ({ className, link, text }: LinkUnderline) => (
  <Link href={link}>
    <a className={className ? `${styles.parent} ${className}` : styles.parent}>
      {text}
      <svg className={styles.svg} height="2" width="100%">
        <rect height="2" width="100%" />
      </svg>
    </a>
  </Link>
);
export default LinkUnderline;
