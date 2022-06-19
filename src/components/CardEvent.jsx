import React from 'react';

function CardEvent({ title, dateText, eventLists, isLast }) {
  return (
    <div className="flex gap-12">
      <h4 className="min-w-fit mt-4 text-white font-bold hidden lg:block">{title}</h4>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-gradient-to-r from-riseDarkGold to-riseLightGold">
          <p className="text-black">{dateText}</p>
        </div>
        <div className={`flex-grow w-1 bg-gradient-to-r from-riseDarkGold to-riseLightGold ${isLast && 'hidden'}`}></div>
      </div>
      <ul className="list-disc mt-4 mb-8 text-left">
        {eventLists.map((eventList, ind) => (
          <li className="mb-4 text-lg" key={ind + eventList}>
            {eventList}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardEvent;
