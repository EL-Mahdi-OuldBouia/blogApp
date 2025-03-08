import { IKImage } from "imagekitio-react";

const Image = ({ src, alt, className, w, h }) => {
  return (
    <IKImage
      urlEndpoint={`https://ik.imagekit.io/vejhhu0ep9/`}
      path={src}
      alt={alt}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
