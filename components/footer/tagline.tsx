import Logo from "@/components/logo";
import LinkSlide from "@/components/general/linkSlide";
import styles from "@/styles/components/footer/tagline.module.scss";

interface Tagline {
  className?: string;
  link: string;
  text: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Tagline = ({ text, link, className }: Tagline) => (
  <div
    className={className ? `${styles.tagline} ${className}` : styles.tagline}
  >
    <LinkSlide link={link} text={text} />
    <Logo className={styles.logo} logotype="DESIGNARONI" placement="footer" />
  </div>
);

export default Tagline;
