import styles from "@/styles/components/loading/loading.module.scss";
import { motion } from "framer-motion";
import CONSTANTS from "@/lib/constants";

interface MotionMessages {
  messages: string[];
}

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
const MotionMessages = ({ messages }: MotionMessages) => {
  const { length: loadingMessagesLength } = messages;
  const animationDuration: number = 0.8 * loadingMessagesLength;

  return (
    <div className={styles.loadingMessagesContainer}>
      {messages.map((message: string, index: number) => (
        <motion.div
          key={message}
          animate={{ opacity: [0, 1, 0] }}
          className={styles.loadingMessage}
          initial={{ opacity: 0 }}
          transition={{
            delay: index * animationDuration,
            duration: animationDuration,
            ease: CONSTANTS.swing.reverse(),
            repeat: Infinity,
            repeatDelay: animationDuration * (loadingMessagesLength - 1),
          }}
        >
          {message}
        </motion.div>
      ))}
    </div>
  );
};

export default MotionMessages;
