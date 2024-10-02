import { Typography } from "@shared/ui";

import classes from "@shared/ui/button/Button.module.scss";

const Button = ({
  variant = "primary",
  children,
  size = "medium",
  className,
  fullWidth = false,
  rounded = false,
  onClick,
  id,
}) => {
  const classNameGenerated = [
    classes.button,
    classes[variant],
    classes[size],
    fullWidth && classes.fullWidth,
    rounded && classes.rounded,
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <button id={id} className={classNameGenerated} onClick={onClick}>
      <Typography variant="button">{children}</Typography>
    </button>
  );
};

export default Button;
