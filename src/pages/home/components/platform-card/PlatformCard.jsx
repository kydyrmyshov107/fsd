import { Typography } from "@shared/ui";
import styles from "./PlatformCard.module.scss";

const PlatformCard = ({ platformItem }) => {
  const { value, description } = platformItem;
  return (
    <div className={styles.stats_box}>
      <Typography
        variant="h2"
        color="blue"
        className={styles.stats_box__number}
      >
        {value}
      </Typography>
      <Typography variant="body" className={styles.stats_box__description}>
        {description}
      </Typography>
    </div>
  );
};

export default PlatformCard;
