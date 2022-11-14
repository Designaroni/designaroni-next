import styles from "@/styles/components/row/row.module.scss";

interface Row {
  children?: React.ReactNode;
  className?: string;
  elementType?: "div" | "p" | "largeP"; // expand in future use cases where element will div | span etc...
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Row = ({ children, className, elementType }: Row) => {
  let classNames = styles.row;

  if (elementType && className) {
    classNames = `${styles.row} ${styles[elementType]} ${className}`;
  } else if (elementType) {
    classNames = `${styles.row} ${styles[elementType]}`;
  } else if (className) {
    classNames = `${styles.row} ${className}`;
  }

  if (elementType === "p" || elementType === "largeP") {
    return <p className={classNames}>{children}</p>;
  }

  return <div className={classNames}>{children}</div>;
};

export default Row;
