import classes from "@shared/ui/image/Image.module.scss";

const Image = ({
  src,
  alt = "",
  width = "auto",
  height = "auto",
  shape = "default",
  className = "",
  id,
}) => {
  const classNameGenerated = [classes.image, classes[shape], className]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <img
      id={id}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNameGenerated}
    />
  );
};
export default Image;
