import Image from 'next/dist/client/image';

const Icon = ({ iconID }) => {
  if (!iconID) {
    return null;
  }
  return (
    <Image
      src={`/icons/${iconID}.png`}
      alt="icon"
      width="150px"
      height="150px"
      loading="eager"
      priority
      placeholder=""
      quality={25}
    />
  );
};

export default Icon;
