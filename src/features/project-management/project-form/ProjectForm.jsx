import styles from "./ProjectForm.module.scss";

const ProjectForm = () => {
  return (
    <form
      action="#"
      method="POST"
      autoComplete="off"
      name="userEditForm"
      encType="multipart/form-data"
      className={styles.projectForm}
    >
      ProjectForm
    </form>
  );
};

export default ProjectForm;
