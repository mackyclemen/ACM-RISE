import React from 'react';

function CardEvent({title, description}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:w-1/3 md:p-8">
      <img
        src="https://placehold.jp/150x150.png"
        className="w-[150px] rounded-3xl"
        alt="event image"
      />
      <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-riseDarkGold to-riseLightGold">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default CardEvent;
