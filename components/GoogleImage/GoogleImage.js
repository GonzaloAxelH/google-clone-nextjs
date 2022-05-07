import Image from "next/image";
import React from "react";
import styled from "styled-components";
const WrapperImage = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
`;

const GoogleImage = () => {
  return (
    <WrapperImage>
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        blurDataURL="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        width={272}
        height={92}
        layout="fixed"
        objectFit="contain"
      />
    </WrapperImage>
  );
};

export default GoogleImage;
