import { FC } from "react";
import "./button.css";
import cx from "classnames";

type TButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<TButton> = ({ className, children, ...otherProps }) => {
  return (
    <button className={cx("button-ui", className)} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
