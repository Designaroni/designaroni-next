import styles from "@/styles/components/section/section.module.scss";

interface Section {
  children?: React.ReactNode;
  className?: string;
  sectionType?:
    | "dynamicTLPHeroMedia"
    | "fullWidth"
    | "fullWidthCenter"
    | "center"
    | "pageTitle"
    | "columnAlignItemsEnd";
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Section = ({ children, className, sectionType }: Section) => {
  let classNames = styles.section;

  if (sectionType && className) {
    classNames = `${styles.section} ${styles[sectionType]} ${className}`;
  } else if (sectionType) {
    classNames = `${styles.section} ${styles[sectionType]}`;
  } else if (className) {
    classNames = `${styles.section} ${className}`;
  }

  return <section className={classNames}>{children}</section>;
};

export default Section;
