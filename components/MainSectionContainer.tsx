import React from 'react';

type childrenTypes = {
  children: React.ReactNode;
};

const MainSectionContainer = ({ children }: childrenTypes) => (
  <div className="backdrop-blur-sm weather-container-main md:px-4 flex flex-row flex-wrap justify-evenly items-center h-fill my-8 py-4 bg-slate-600/25 w-full mx-0 shadow-sm shadow-black/25 rounded ">
    {children}
  </div>
);

export default MainSectionContainer;
