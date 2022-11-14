import styles from "@/styles/components/title/title.module.scss";

interface Title {
  children?: React.ReactNode;
  className?: string;
  titleType?:
    | "pageDisplayTitle"
    | "topLevelPageDisplayTitle"
    | "h1"
    | "inlineh1"
    | "h2"
    | "inlineh2"
    | "h3"
    | "inlineh3"
    | "h4"
    | "inlineh4"
    | "inlineh5"
    | "h5"
    | "inlineh6"
    | "h6";
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Title = ({ children, className, titleType }: Title) => {
  let classNames = styles.title;

  if (titleType && className) {
    classNames = `${styles.title} ${styles[titleType]} ${className}`;
  } else if (titleType) {
    classNames = `${styles.title} ${styles[titleType]}`;
  } else if (className) {
    classNames = `${styles.title} ${className}`;
  }

  if (
    titleType === "inlineh1" ||
    titleType === "h1" ||
    titleType === "topLevelPageDisplayTitle"
  ) {
    return (
      <div className={classNames}>
        <h1>{children}</h1>
      </div>
    );
  }

  if (titleType === "inlineh2" || titleType === "h2") {
    return (
      <div className={classNames}>
        <h2>{children}</h2>
      </div>
    );
  }

  if (titleType === "inlineh3" || titleType === "h3") {
    return (
      <div className={classNames}>
        <h3>{children}</h3>
      </div>
    );
  }

  if (titleType === "inlineh4" || titleType === "h4") {
    return (
      <div className={classNames}>
        <h4>{children}</h4>
      </div>
    );
  }

  if (titleType === "inlineh5" || titleType === "h5") {
    return (
      <div className={classNames}>
        <h5>{children}</h5>
      </div>
    );
  }

  if (titleType === "inlineh6" || titleType === "h6") {
    return (
      <div className={classNames}>
        <h6>{children}</h6>
      </div>
    );
  }

  return (
    <div className={classNames}>
      <h3>{children}</h3>
    </div>
  );
};

export default Title;
