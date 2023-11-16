import React, { memo, useState } from "react";
import { Loader } from "lucide-react";
import cn from "classnames";
import LazyLoad from "react-lazyload";

type TImageLazyLoader = React.ImgHTMLAttributes<HTMLImageElement>;
import "./image-lazy-loader.css";

const ImageLazyLoader = ({
  src,
  alt,
  className,
  ...otherProps
}: TImageLazyLoader) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <LazyLoad once className={cn("image-lazy-loader-ui", className)}>
      <img
        onLoad={handleLoad}
        onError={(e) => console.log("error", e)}
        src={src}
        alt={alt}
        loading="lazy"
        {...otherProps}
      />
      {!loaded && (
        <Loader color="black" className="image-lazy-loader-ui__load-icon" />
      )}
    </LazyLoad>
  );
};

export default memo(ImageLazyLoader);
