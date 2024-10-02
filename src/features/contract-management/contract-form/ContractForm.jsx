import styles from "./ContractForm.module.scss";

const ContractForm = () => {
  return (
    <form
      action="#"
      method="POST"
      autoComplete="off"
      name="userEditForm"
      encType="multipart/form-data"
      className={styles.contractForm}
    >
      ContractForm
    </form>
  );
};

export default ContractForm;
