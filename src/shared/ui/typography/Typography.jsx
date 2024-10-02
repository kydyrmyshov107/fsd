import classes from "@shared/ui/typography/Typography.module.scss";

import { truncateString } from "@shared/utils/helpers/helpers";

const Typography = ({
  variant = "body",
  weight = "",
  children,
  className,
  color = "",
  truncate = 0,
  id,
}) => {
  const Tags = {
    h1: "h1",
    h2: "h2",
    button: "p",
    body: "p",
    smallBody: "p",
    extraSmallBody: "p",
    description: "p",
  };

  const classNameGenerated = [
    classes[variant],
    classes[weight],
    classes[color],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const TagName = Tags[variant] || "p";

  return (
    <TagName id={id} className={classNameGenerated}>
      {!truncate ? children : truncateString(children, truncate)}
    </TagName>
  );
};

export default Typography;
