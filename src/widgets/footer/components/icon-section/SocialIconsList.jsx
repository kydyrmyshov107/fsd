import styles from "@widgets/footer/components/icon-section/SocialIconsList.module.scss";

const SocialIconsList = () => {
  return (
    <div className={styles.icons}>
      {[1, 2, 3].map((item) => (
        <div key={item} className={styles.icons_icon}></div>
      ))}
    </div>
  );
};

export default SocialIconsList;
