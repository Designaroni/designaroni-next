import styles from "@/styles/components/column/column.module.scss";

interface Column {
  children?: React.ReactNode;
  className?: string;
  columnType?: "center"; // expand in future use cases where element will div | span etc...
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Column = ({ children, className, columnType }: Column) => {
  let classNames = styles.column;

  if (columnType && className) {
    classNames = `${styles.column} ${styles[columnType]} ${className}`;
  } else if (columnType) {
    classNames = `${styles.column} ${styles[columnType]}`;
  } else if (className) {
    classNames = `${styles.column} ${className}`;
  }

  return <div className={classNames}>{children}</div>;
};

export default Column;
