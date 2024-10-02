import IconGeeks from "@shared/ui/icons/IconGeeks";
import styles from "@widgets/footer/components/copyright/FooterCopyright.module.scss";
import { Link } from "react-router-dom";
import { Typography } from "@shared/ui";

const FooterCopyright = () => {
  return (
    <div className={styles.made}>
      <Link to="https://geeks.kg/geeks-pro" className={styles.made}>
        <Typography variant="body" className={styles.made_title}>
          MADE BY GEEKSPRO
        </Typography>
        <IconGeeks width={16} height={23} />
      </Link>
    </div>
  );
};

export default FooterCopyright;
