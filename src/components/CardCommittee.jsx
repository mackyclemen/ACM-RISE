import React from 'react';

function CardCommittee({ name, description, imgSrc }) {
  return (
    <div>
      <img className='rounded-full mb-4' src={imgSrc} alt="Committee Picture" />
      <h4 className='text-xl font-bold text-white'>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default CardCommittee;
