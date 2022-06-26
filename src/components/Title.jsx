import React from 'react';

function Title({ title, description = '' }) {
  return (
    <div className="flex flex-col gap-4 2xl:w-2/3">
      <h1 className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-riseDarkGold to-riseLightGold leading-tight">
        {title}
      </h1>
      {description && <p className="text-gray-300 text-xl">{description}</p>}
    </div>
  );
}

export default Title;
