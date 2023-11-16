import { FC, PropsWithChildren, memo } from "react";
import "./typography.css";

type Typography = {
  size?: number;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

const Typography: FC<PropsWithChildren<Typography>> = ({
  children,
  size = 14,
  weight = 400,
}) => {
  return (
    <p style={{ fontSize: size, fontWeight: weight }} className="typography-ui">
      {children}
    </p>
  );
};

export default memo(Typography);
