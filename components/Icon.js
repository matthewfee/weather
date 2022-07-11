import Image from 'next/dist/client/image';

const Icon = ({ iconID }) => {
  if (!iconID) {
    return null;
  }
  return <Image src={`/icons/${iconID}.png`} alt="icon" width="200px" height="200px" />;
};

export default Icon;
