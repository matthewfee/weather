const SiteHeader = ({ weather }) => (
  <h2
    className={`absolute tracking-widest text-center w-fit rounded px-2 font-bold letter uppercase ${
      weather
        ? 'opacity-95 top-[-40px] text-2xl bg-[#023469]/50'
        : 'opacity-100 top-[-100px] text-3xl md:text-6xl text-white no-wrap'
    } text-white `}
  >
    Sky Search
  </h2>
);

export default SiteHeader;
