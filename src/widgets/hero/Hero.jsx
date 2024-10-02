import { Container, Typography, Button, Image } from "@shared/ui";
import { IconLock, IconDefaultStar, IconLineBarChart } from "@shared/ui/icons";

import chart from "@shared/assets/images/charts.png";

import styles from "@widgets/hero/Hero.module.scss";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const infoItems = [
    {
      id: 1,
      icon: <IconDefaultStar />,
      text: t("mainPage.Hero.businessIdea"),
    },
    {
      id: 2,
      icon: <IconLineBarChart />,
      text: t("mainPage.Hero.newTechnology"),
    },
    {
      id: 3,
      icon: <IconLock />,
      text: t("mainPage.Hero.infoStorage"),
    },
  ];

  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.hero__container}>
          <div className={styles.hero__container__text_container}>
            <Typography
              variant="h2"
              className={styles.hero__container__text_container__title_hero}
            >
              Intellect Market - <br /> {t("mainPage.Hero.heroTitle")}
            </Typography>
            <div className={styles.hero__container__text_container__texts}>
              {infoItems.map((item) => (
                <div
                  key={item.id}
                  className={styles.hero__container__text_container__texts_info}
                >
                  <div
                    className={
                      styles.hero__container__text_container__texts_info_icon
                    }
                  >
                    {item.icon}
                  </div>
                  <Typography
                    variant="body"
                    className={
                      styles.hero__container__text_container__texts_info_text
                    }
                  >
                    {item.text}
                  </Typography>
                </div>
              ))}

              <Button
                className={
                  styles.hero__container__text_container__texts__btn_join
                }
                variant="primary"
                size="medium"
              >
                {t("mainPage.Hero.join")}
              </Button>
            </div>
          </div>
          <div>
            <Image src={chart} alt="chart" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
