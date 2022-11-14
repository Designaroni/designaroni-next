import LinkSlide from "@/components/general/linkSlide";
import styles from "@/styles/components/footer/daysRemaining.module.scss";

interface DaysRemaining {
  className?: string;
  text: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const DaysRemaining = ({ className, text }: DaysRemaining) => {
  const daysRemainingInTheYear = (): string => {
    const now = new Date();
    const endOfYear = new Date(now.getFullYear(), 11, 31);
    const diffInMs = endOfYear.getTime() - now.getTime();
    const utcDayInMs = 1000 * 60 * 60 * 24;

    return Math.round(diffInMs / utcDayInMs).toString();
  };

  return (
    <span
      className={
        className
          ? `${styles.daysRemaining} ${className}`
          : styles.daysRemaining
      }
    >
      <LinkSlide link="/" text={`${text} ${daysRemainingInTheYear()}`} />
    </span>
  );
};
export default DaysRemaining;
