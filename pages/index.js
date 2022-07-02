import { useState } from 'react';

export const Home = () => {
  const [variable, setVariable] = useState([2, 3, 4, 5, 6]);

  return (
    <div
      className={`flex flex-col items-center h-screen w-screen border-blue-200 
      border-2 p-28 m-12`}
    >
      asdfasdfasdf
      <h1 className="border-red-900 border-2 w-52 m-10">New Application</h1>
      <div className="test">
        {variable.map((number) => (
          <div>{number}</div>
        ))}
      </div>
      <button type="button" onClick={setVariable([220, 2124, 240241, 240214])}>
        Button
      </button>
      <main>Test Text</main>
    </div>
  );
};
