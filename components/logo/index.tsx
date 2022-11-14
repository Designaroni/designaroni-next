import Link from "next/link";
import { X } from "phosphor-react";
import styles from "@/styles/components/logo/logo.module.scss";
import variables from "@/styles/variables.module.scss";
import useIsMobile from "@/lib/hooks/useIsMobile";

interface Logo {
  className?: string;
  logotype: string;
  placement?: "header" | "footer";
}

interface LogoVariant {
  className?: string;
  logotype: string;
}

const LogoVariantOne = ({ className, logotype }: LogoVariant) => (
  <Link href="/">
    <a
      className={
        className
          ? `${styles.logo} ${className} ${styles.variantOne}`
          : `${styles.logo} ${styles.variantOne}`
      }
    >
      <X
        className={styles.icon}
        color={variables.primaryFontColor}
        size={48}
        weight="duotone"
      />
      <div className={styles.logotype}>{logotype}</div>
    </a>
  </Link>
);

const LogoVariantTwo = ({ className, logotype }: LogoVariant) => (
  <Link href="/">
    <a
      className={
        className
          ? `${styles.logo} ${className} ${styles.variantTwo}`
          : `${styles.logo} ${styles.variantTwo}`
      }
    >
      <X
        className={styles.icon}
        color={variables.primaryFontColor}
        size={32}
        weight="duotone"
      />
      <div className={styles.logotype}>{logotype}</div>
    </a>
  </Link>
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Logo = ({ className, logotype, placement }: Logo) => {
  const { isMobile } = useIsMobile();

  return (
    <>
      {placement === "header" &&
        (isMobile ? (
          <LogoVariantTwo className={className} logotype={logotype} />
        ) : (
          <LogoVariantOne className={className} logotype={logotype} />
        ))}
      {placement === "footer" && (
        <LogoVariantTwo className={className} logotype={logotype} />
      )}
    </>
  );
};

export default Logo;
