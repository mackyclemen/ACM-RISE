import React from 'react';
import Title from './Title';

function SectionTopic({title, description, isReverse = false}) {
  return (
    <div className={`flex gap-16 flex-col text-center md:text-left ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <img
        src="https://placehold.jp/450x400.png"
        className="rounded-2xl"
        alt="Topic"
      />
      <div className="flex flex-col gap-4">
        <Title title={title} />
        <p className="text-2xl text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default SectionTopic;
