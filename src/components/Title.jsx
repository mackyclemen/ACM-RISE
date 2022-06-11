import React from 'react';

function Title({ title, description = '' }) {
  return (
    <>
      <h1 className="text-white font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-riseDarkGold to-riseLightGold">
        {title}
      </h1>
      {description && <p>{description}</p>}
    </>
  );
}

export default Title;
