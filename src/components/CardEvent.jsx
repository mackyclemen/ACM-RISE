import React from 'react';

// function CardEvent({ title, id, dateText, eventLists, isLast }) {
function CardEvent({ title, id, dateText, isLast = false, children = '' }) {
  return (
    <div className="flex gap-12" id={id}>
      <h4 className="mt-2 text-white text-xl font-bold hidden xl:block w-24 shrink-0">{title}</h4>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-eventCircle">
          <p className="text-white text-sm font-semibold">{dateText}</p>
        </div>
        <div className={`flex-grow w-1 bg-eventCircle ${isLast && 'hidden'}`}></div>
      </div>
      {children}
      {/* <ul className="list-disc mt-4 mb-8 text-left">
        {eventLists.map((eventList, ind) => (
          <li className="mb-4 text-lg text-gray-300" key={ind + eventList}>
            {eventList}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default CardEvent;
