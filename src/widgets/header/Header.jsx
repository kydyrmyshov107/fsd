import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import { Container, Button, DropDown } from "@shared/ui";
import { IconLanguage, IconSearch } from "@shared/ui/icons";
import { appRoutes, getWords } from "@shared/constants/constants";
import styles from "@widgets/header/Header.module.scss";

const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const toggleSearchInput = () => {
    setShowSearchInput((prev) => !prev);
  };

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const words = getWords(t);

  const options = [
    { value: "ru", label: t("languages.ru") },
    { value: "ky", label: t("languages.ky") },
    { value: "en", label: t("languages.en") },
  ];

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <nav className={styles.header_start}>
            <Button
              className={styles.button_logo}
              variant="primary"
              onClick={() => navigate(appRoutes.home)}
            >
              LOGO
            </Button>
            {words.map((el) => (
              <li key={el.id} className={styles.li_nav}>
                <Link className={styles.link} to={el.path}>
                  {el.text}
                </Link>
              </li>
            ))}
          </nav>
          <div className={styles.header_end}>
            <div className={styles.icons}>
              <div>
                {showSearchInput ? (
                  <div
                    className={`${styles.search_input} ${
                      i18n.language === "ky" ? styles.search_input_ky : ""
                    }`}
                  >
                    <Button
                      onClick={toggleSearchInput}
                      className={`${styles.button_icon} ${
                        i18n.language === "ky" ? styles.button_icon_ky : ""
                      }`}
                      size="short"
                    >
                      <IconSearch />
                    </Button>

                    <input type="text" />
                  </div>
                ) : (
                  <Button
                    onClick={toggleSearchInput}
                    className={styles.button_icon}
                    size="short"
                  >
                    <IconSearch />
                  </Button>
                )}
              </div>
              <div className={styles.drop_down_tag}>
                <Button
                  onClick={toggleDropDown}
                  className={styles.button_icon}
                  size="short"
                >
                  <IconLanguage />
                </Button>
                {isDropDownOpen && (
                  <DropDown
                    className={styles.drop_down}
                    options={options}
                    onSelect={changeLanguage}
                  />
                )}
              </div>
            </div>
            <div className={styles.buttons}>
              <Button variant="secondary" size="short" rounded>
                Вход
              </Button>
              <Button variant="primary" rounded>
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
