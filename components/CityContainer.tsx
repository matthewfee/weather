import { isDataView } from 'util/types';
import { fixCityCapitalization } from '../utilities/utilities';

interface CityContainerProps {
  location: string;
  isDaytime: boolean;
}

const CityContainer = ({ location, isDaytime }: CityContainerProps) => (
  <h2
    className={`city-name md:text-2xl text-xl md:pt-0 text-center capitalize tracking-wide ${
      isDaytime ? 'text-[#b8d7fc]' : 'text-white'
    }  font-semibold `}
  >
    {fixCityCapitalization(location)}
  </h2>
);

export default CityContainer;
