import styles from "@/styles/components/loading/loading.module.scss";
import variables from "@/styles/variables.module.scss";
import MotionMessages from "./motionMessages";
import MotionMountains from "./motionMountains";

interface Loading {
  className?: string;
  loadingMessage?: string | string[];
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const Loading = ({ className, loadingMessage }: Loading) => (
  <div
    className={className ? `${styles.loading} ${className}` : styles.loading}
  >
    <MotionMountains animatedColor={variables.mountainSage} size={32} />
    {loadingMessage && Array.isArray(loadingMessage) ? (
      <MotionMessages messages={loadingMessage} />
    ) : (
      <div className={styles.loadingMessage}>{loadingMessage}</div>
    )}
  </div>
);

export const LoadingScreen = ({ className, loadingMessage }: Loading) => (
  <div
    className={
      className ? `${styles.loadingScreen} ${className}` : styles.loadingScreen
    }
  >
    <Loading loadingMessage={loadingMessage} />
  </div>
);

export default Loading;
