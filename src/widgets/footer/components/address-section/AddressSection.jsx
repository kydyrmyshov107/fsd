import { Typography } from "@shared/ui";
import styles from "@widgets/footer/components/address-section/AddressSection.module.scss";
import { useTranslation } from "react-i18next";

const AddressSection = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.address}>
      <ul className={styles.address__text}>
        <li className={styles.address__text_list}>
          <Typography
            variant="body"
            className={styles.address__text__list_list}
          >
            {t("footer.f_address")}:
          </Typography>
        </li>
        <li className={styles.address__text_list}>{t("footer.f_street")}</li>
      </ul>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.1961698504297!2d74.61372407637256!3d42.868703471150226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c9d6b14703%3A0x8e5782bf969dc2c!2zNjIg0YPQuy4g0JzQvtGB0LrQvtCy0YHQutCw0Y8sINCR0LjRiNC60LXQuiA3MjAwMjE!5e0!3m2!1sru!2skg!4v1726387303489!5m2!1sru!2skg"
        className={styles.address__iframe}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </nav>
  );
};

export default AddressSection;
