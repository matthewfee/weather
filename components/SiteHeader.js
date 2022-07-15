const SiteHeader = ({ weather }) => (
  <h1
    className={`absolute transition-all tracking-widest font-semibold letter duration-1000 ease-in uppercase ${
      weather
        ? 'opacity-50 h-0 top-10 text-xl '
        : 'opacity-100 top-[350px] text-4xl md:text-8xl text-white'
    } text-white `}
  >
    Sky Search
  </h1>
);

export default SiteHeader;
