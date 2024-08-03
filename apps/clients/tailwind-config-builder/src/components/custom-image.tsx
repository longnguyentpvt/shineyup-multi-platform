import getConfig from "next/config";
import Image, { ImageProps } from "next/image";
import React from "react";

const CustomImage: React.FC<ImageProps> = ({ alt, src, ...props }) => {
  const nextConfig = getConfig() as { publicRuntimeConfig: { basePath: string } };
  const basePath = nextConfig?.publicRuntimeConfig?.basePath ?? "";

  return (
    <Image src={ `${ basePath }${ src }` } alt={ alt } { ...props } />
  );
};

export default CustomImage;
