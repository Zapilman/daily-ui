import { FC, HTMLAttributes, PropsWithChildren, memo } from "react";
import "./typography.css";
import cn from "classnames";
type Typography = HTMLAttributes<HTMLParagraphElement> & {
  size?: number;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

const Typography: FC<PropsWithChildren<Typography>> = ({
  children,
  size = 14,
  weight = 400,
  className,
  ...otherProps
}) => {
  return (
    <p
      style={{ fontSize: size, fontWeight: weight }}
      className={cn("typography-ui", className)}
      {...otherProps}
    >
      {children}
    </p>
  );
};

export default memo(Typography);
