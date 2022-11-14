import { MagnifyingGlass } from "phosphor-react";
import styles from "@/styles/components/search/search.module.scss";
import variables from "@/styles/variables.module.scss";

interface Search {
  className?: string;
  text?: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Search = ({ className, text }: Search) => (
  <div className={className ? `${styles.search} ${className}` : styles.search}>
    <input
      className={styles.text}
      placeholder={text || "Search"}
      type="search"
    />
    <MagnifyingGlass
      className={styles.icon}
      color={variables.secondaryFontColor}
      size={24}
      weight="regular"
    />
  </div>
);

export default Search;
