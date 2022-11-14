import { FooterData, TopLevelPageNames } from "@/lib/api";
import Navigation from "@/components/navigation";
import DaysRemaining from "@/components/footer/daysRemaining";
import FiveStrengths from "@/components/footer/fiveStrengths";
import Tagline from "@/components/footer/tagline";
import styles from "@/styles/components/footer/footer.module.scss";

interface Footer {
  footerData: FooterData;
  topLevelPageNames: TopLevelPageNames;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Footer = ({ topLevelPageNames, footerData }: Footer) => (
  <footer className={styles.footer}>
    <Navigation
      className={styles.navigation}
      placement="footer"
      topLevelPageNames={topLevelPageNames}
    />
    <div className={styles.column}>
      <DaysRemaining
        className={styles.daysRemaining}
        text={footerData.daysRemaining}
      />
      <FiveStrengths
        className={styles.fiveStrengths}
        text={footerData.fiveStrengths}
      />
    </div>
    <Tagline className={styles.tagline} link="/" text={footerData.tagline} />
  </footer>
);

export default Footer;
