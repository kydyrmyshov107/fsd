import { useTranslation } from "react-i18next";
import { Container, Typography } from "@shared/ui";

import {
  MenuSection,
  SocialIconsList,
  AddressSection,
  FooterCopyright,
} from "@widgets/footer/components";
import { footerData } from "@shared/constants/appConstants";
import styles from "@widgets/footer/Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <div className={styles.footer__content_block}>
            <MenuSection
              titleKey="footer.f_platform"
              items={footerData.wordsPlatworm}
              itemKey="platform"
            />

            <div className={styles.footer__content__block_item}>
              <MenuSection
                titleKey="footer.f_contacts"
                items={footerData.wordsContacts}
                itemKey="contacts"
              />

              <SocialIconsList />
            </div>
          </div>

          <MenuSection
            titleKey="footer.f_opportunities"
            items={footerData.wordsOpportunities}
            itemKey="opportunities"
          />

          <AddressSection />
        </div>
        <div className={styles.footer__policy}>
          <Typography variant="p" className={styles.footer__policy_text}>
            {t("footer.f_personal")}
          </Typography>
          <Typography variant="p" className={styles.footer__policy_text}>
            {t("footer.f_consent")}
          </Typography>
        </div>
      </Container>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
