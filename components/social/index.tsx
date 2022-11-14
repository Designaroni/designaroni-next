import {
  YoutubeLogo,
  InstagramLogo,
  TiktokLogo,
  LinkedinLogo,
} from "phosphor-react";
import Link from "next/link";
import styles from "@/styles/components/social/social.module.scss";

interface Social {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Social = ({ className }: Social) => (
  <span className={className ? `${styles.social} ${className}` : styles.social}>
    <Link href="https://www.youtube.com/channel/UCIH77UTZorw-xSK7h8mZfug">
      <a className={styles.icon} target="_blank">
        <YoutubeLogo
          alt="Outbound link to Youtube"
          size={28}
          weight="duotone"
        />
      </a>
    </Link>
    <Link href="https://instagram.com/designaroni">
      <a className={styles.icon} target="_blank">
        <InstagramLogo
          alt="Outbound link to Instagram"
          size={28}
          weight="duotone"
        />
      </a>
    </Link>
    <Link href="https://tiktok.com/@designaroni">
      <a className={styles.icon} target="_blank">
        <TiktokLogo alt="Outbound link to TikTok" size={28} weight="duotone" />
      </a>
    </Link>
    <Link href="https://www.linkedin.com/in/ian-roberts-designaroni">
      <a className={styles.icon} target="_blank">
        <LinkedinLogo
          alt="Outbound link to LinkedIn"
          size={28}
          weight="duotone"
        />
      </a>
    </Link>
  </span>
);

export default Social;
