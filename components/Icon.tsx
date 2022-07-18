import Image from 'next/dist/client/image';
import React from 'react';

const Icon = ({ iconID }) => {
  if (!iconID) {
    return null;
  }
  return (
    <Image
      src={`/icons/${iconID}.svg`}
      alt="icon"
      width="60px"
      height="60px"
      loading="eager"
      priority
      quality={25}
    />
  );
};

export default Icon;
