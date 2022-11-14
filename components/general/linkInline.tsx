import Link from "next/link";
import styles from "@/styles/components/general/linkInline.module.scss";

interface LinkInline {
  className?: string;
  link: string;
  text: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const LinkInline = ({ className, link, text }: LinkInline) => (
  <Link href={link}>
    <a className={className ? `${styles.parent} ${className}` : styles.parent}>
      {text}
      <svg className={styles.svg} height="100%" width="100%">
        <rect height="100%" width="100%" />
      </svg>
    </a>
  </Link>
);

export default LinkInline;
