import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import Typography from "../Typography/Typography";
import cn from "classnames";
import styles from "./Button.module.scss";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  variant: "primary";
}

const Button: FC<IButtonProps> = ({
  children,
  variant = "primary",

  ...props
}) => {
  return (
    <button className={cn(styles.root, styles[variant])} {...props}>
      <Typography variant='t16'>{children}</Typography>
    </button>
  );
};

export default Button;
