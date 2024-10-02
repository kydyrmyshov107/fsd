import { Container, Typography } from "@shared/ui";
import styles from "./Platform.module.scss";
import { useTranslation } from "react-i18next";
import PlatformCard from "@pages/home/components/platform-card/PlatformCard";
import { platformData as getplatformData } from "@shared/constants/appConstants";

const Platform = () => {
  const { t } = useTranslation();

  const platformData = getplatformData(t);

  return (
    <div className={styles.platform}>
      <Container>
        <Typography variant="h2" className={styles.platform__title}>
          {t("mainPage.Platform.platform")}
          <span className={styles.platform__title_blue}>
            {" "}
            {t("mainPage.Platform.platformTitle")}
          </span>
        </Typography>
        <div className={styles.platform__stats_container}>
          {platformData.map((platform) => (
            <PlatformCard key={platform.id} platformItem={platform} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Platform;
