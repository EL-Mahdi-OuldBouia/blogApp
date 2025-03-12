import { IKImage } from "imagekitio-react";

<<<<<<< HEAD
const Image = ({ src, alt, className, w, h }) => {
=======
const Image = ({ src, alt, className, w, h, url }) => {
>>>>>>> 87197b3 (Initial commit with linked GitHub repo)
  return (
    <IKImage
      urlEndpoint={`https://ik.imagekit.io/vejhhu0ep9/`}
      path={src}
      alt={alt}
<<<<<<< HEAD
=======
      url={url}
>>>>>>> 87197b3 (Initial commit with linked GitHub repo)
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
