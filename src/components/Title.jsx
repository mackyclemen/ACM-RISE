import React from 'react';

function Title({ title, description = '' }) {
  return (
    <div className="flex flex-col gap-4 lg:w-2/3">
      <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-riseDarkGold to-riseLightGold">
        {title}
      </h1>
      {description && <p>{description}</p>}
    </div>
  );
}

export default Title;
