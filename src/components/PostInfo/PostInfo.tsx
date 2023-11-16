import React, { memo, useMemo } from "react";
import cn from "classnames";
import "./post-info.css";
import { Typography } from "../Typography";
import dayjs from "dayjs";

type PostInfo = {
  className?: string;
  kind?: string;
  title: string;
  content: string;
  datePublish: Date | string;
  readMinutes?: number;
};

const PostInfo = ({
  className,
  kind,
  title,
  content,
  datePublish,
  readMinutes,
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
    <div className={cn("post-info-ui", className)}>
      <Typography>{kind}</Typography>
      {title && (
        <Typography size={24} weight={700}>
          {title}
        </Typography>
      )}
      {content && <Typography size={16}>{content}</Typography>}
      <div className="post-info-ui__desc">
        {kind && <Typography>{parsedDatePublish}</Typography>}
        {readMinutes && <Typography>{parsedReadTerm}</Typography>}
      </div>
    </div>
  );
};

export default memo(PostInfo);
