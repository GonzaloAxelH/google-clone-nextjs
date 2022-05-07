import Image from "next/image";
import React from "react";

const GoogleImage = () => {
  return (
    <Image
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      blurDataURL="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      width={272}
      height={92}
      layout="fixed"
      objectFit="contain"
    />
  );
};

export default GoogleImage;
