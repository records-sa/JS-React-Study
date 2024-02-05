import React from 'react';

export const TailwindCss = () => {
  return (
      <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
        <p className="m-0 text-gary-400">Tailwind Css입니다</p>
        <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">Button</button>
      </div>
  );
};
