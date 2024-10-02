import styles from "./UserEditForm.module.scss";

const UserEditForm = () => {
  return (
    <form
      action="#"
      method="POST"
      autoComplete="off"
      name="userEditForm"
      encType="multipart/form-data"
      className={styles.userEditForm}
    >
      UserEditForm
    </form>
  );
};

export default UserEditForm;
