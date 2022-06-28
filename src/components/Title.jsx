import React from 'react';

function Title({ title, children = null}) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-riseDarkGold to-riseLightGold leading-tight">
        {title}
      </h1>
      <div className="flex flex-col gap-4 2xl:w-2/3 text-gray-300 text-xl">
        {children}
      </div>
    </div>
  );
}

export default Title;
