import React from 'react';

function CardEvent({title, date, description, imgSrc, link="#"}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:w-1/3 md:p-8">
      <img
        src={imgSrc}
        className="w-[150px] rounded-3xl"
        alt="event image"
      />
      <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-riseDarkGold to-riseLightGold">
        <a href={link} className="block text-3xl font-bold hover:underline underline-offset-4  decoration-riseLightGold">{title}</a>
        <span className="text-base font-semibold">{date}</span>
      </div>
      <p className='text-gray-300 text-xl text-center max-w-[250px]'>{description}</p>
    </div>
  );
}

export default CardEvent;
