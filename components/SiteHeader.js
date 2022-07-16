const SiteHeader = ({ weather }) => (
  <h2
    className={`absolute tracking-widest text-center w-full font-bold letter  uppercase ${
      weather
        ? 'opacity-95 h-0 top-[-40px] text-2xl '
        : 'opacity-100 top-[-100px] text-4xl md:text-7xl text-white no-wrap'
    } text-white `}
  >
    Sky Search
  </h2>
);

export default SiteHeader;
