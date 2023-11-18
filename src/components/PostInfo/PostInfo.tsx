import React, { HTMLAttributes, memo, useMemo } from "react";
import cn from "classnames";
import "./post-info.css";
import { Typography } from "../Typography";
import dayjs from "dayjs";
import { ImageLazyLoader } from "../ImageLazyLoader";

type PostInfo = HTMLAttributes<HTMLDivElement> & {
  title: string;
  previewText: string;
  datePublish: Date | string;
  imageUrl?: string;
  tags?: string[];
  readMinutes?: number;
};

const PostInfo = ({
  className,
  tags,
  title,
  previewText,
  datePublish,
  readMinutes,
  imageUrl,
  ...otherProps
}: PostInfo) => {
  const parsedDatePublish = useMemo(() => {
    let validDate = new Date();
    if (typeof datePublish === "string") {
      validDate = new Date(datePublish);
    } else if (dayjs(datePublish).isValid()) {
      validDate = datePublish;
    }
    return dayjs(validDate).format("DD MMM YYYY");
  }, [datePublish]);

  const parsedReadTerm = useMemo(() => {
    if (readMinutes) {
      let sufix = "min";
      let count = readMinutes;
      if (readMinutes >= 60) {
        sufix = "hours";
        count = Math.round(readMinutes / 60);
      }
      return `${count} ${sufix} read`;
    }
  }, [readMinutes]);

  return (
    <div className={cn("post-info-ui", className)} {...otherProps}>
      {imageUrl && (
        <ImageLazyLoader className="post-info-ui__image" src={imageUrl} />
      )}
      <div className="post-info-ui__content">
        <Typography className="post-info-ui__tags">
          {tags?.join(",")}
        </Typography>

        {title && (
          <Typography size={24} weight={700}>
            {title}
          </Typography>
        )}
        {previewText && <Typography size={16}>{previewText}</Typography>}
        <div className="post-info-ui__desc">
          {parsedDatePublish && <Typography>{parsedDatePublish}</Typography>}
          {readMinutes && <Typography>{parsedReadTerm}</Typography>}
        </div>
      </div>
    </div>
  );
};

export default memo(PostInfo);
