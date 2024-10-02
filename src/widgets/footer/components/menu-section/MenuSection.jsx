import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Typography } from "@shared/ui";
import styles from "@widgets/footer/components/menu-section/MenuSection.module.scss";

const itemsKeys = {
  platform: ["innovators", "investors", "experts"],
  opportunities: ["marketplace", "transfer"],
};

const MenuSection = ({ titleKey, items, itemKey }) => {
  const { t } = useTranslation();
  return (
    <nav className={styles.menu}>
      <Typography variant="body" className={styles.menu__title}>
        {t(`${titleKey}`)}
      </Typography>

      <ul className={styles.menu__item}>
        {itemKey === "contacts"
          ? items.map((tel) => (
              <li key={tel.id}>
                <a className={styles.menu__item__phone} href={`${tel.path}`}>
                  {tel.text}
                </a>
              </li>
            ))
          : items.map((item, index) => (
              <li key={item.id} className={styles.menu__item__list}>
                <Link className={styles.menu__item__link} to={item.path}>
                  {t(`footer.f_${itemsKeys[itemKey][index] || ""}`)}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  );
};

export default MenuSection;
