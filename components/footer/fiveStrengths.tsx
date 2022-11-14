import LinkSlide from "@/components/general/linkSlide";
import styles from "@/styles/components/footer/fiveStrengths.module.scss";

interface FiveStrengths {
  className?: string;
  text: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const FiveStrengths = ({ className, text }: FiveStrengths) => (
  <span
    className={
      className ? `${styles.fiveStrengths} ${className}` : styles.fiveStrengths
    }
  >
    <LinkSlide link="/" text={text} />
  </span>
);

export default FiveStrengths;
