import { memo } from "react";
import { ImageLazyLoader } from "../ImageLazyLoader";
import cx from "classnames";

import "./avatar.css";
import { Typography } from "../Typography";

type TAvatarPropsCommon = {
  image: string;
  size?: "s" | "m" | "l";
};

type TAvatarPropsFull = TAvatarPropsCommon & {
  full: boolean;
  primaryText: string;
  secondaryText: string;
};

type TAvatarProps = TAvatarPropsCommon & {
  full?: never;
  primaryText?: never;
  secondaryText?: never;
};

const Avatar = ({
  image,
  size,
  full,
  secondaryText,
  primaryText,
}: TAvatarProps | TAvatarPropsFull) => {
  return (
    <div className="ui-avatar">
      <ImageLazyLoader
        className={cx("ui-avatar__image", size && `ui-avatar__image_${size}`)}
        src={image}
      />
      {full && (
        <div>
          <Typography size={16} weight={700}>
            {primaryText}
          </Typography>
          <Typography>{secondaryText}</Typography>
        </div>
      )}
    </div>
  );
};

export default memo(Avatar);
