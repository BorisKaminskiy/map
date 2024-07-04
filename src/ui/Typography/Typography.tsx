import { DetailedHTMLProps, FC, ReactNode, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Typography.module.scss";

interface ITypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  variant:  "t16";
  children: ReactNode;
  isUppercase?: boolean;
  isCapitalize?: boolean;
  isCenter?: boolean;
  isRight?: boolean;
  isJustify?: boolean;
  isBold?: boolean;
  color?: string;
}

const Typography: FC<ITypographyProps> = ({
  variant,
  color,
  children,
  isUppercase,
  isCapitalize,
  isRight,
  isCenter,
  isJustify,
  ...props
}): JSX.Element => {
  return (
    <span
      className={cn(styles.root, styles[variant])}
      style={{
        color: color ? `var(--${color})` : "inherit",
        textTransform:
          (isUppercase && "uppercase") ||
          (isCapitalize && "capitalize") ||
          "none",
        textAlign:
          (isRight && "right") ||
          (isCenter && "center") ||
          (isJustify && "justify") ||
          "left",
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Typography;
