type temperatureType = {
  temperature: number | null;
};

const TemperatureContainer = ({ temperature }: temperatureType) => (
  <div className="temperature flex justify-center items-center max-w-1/4 md:pr-4">
    <span className="md:text-8xl sm:text-7xl text-5xl p-0 font-semibold">{temperature}</span>
    <span className="text-6xl self-start mt-2">°</span>
  </div>
);

export default TemperatureContainer;
