import React from 'react';

function PartnersSponsor({ title, description, images, titleClass = "" }) {
  return (
    <div className="flex flex-col text-center 2xl:text-left gap-4">
      <h3 className={`${titleClass} text-3xl font-semibold`}>{title}</h3>
      <p className="text-gray-300">{description}</p>
      <div className='flex flex-col 2xl:flex-row flex-wrap gap-16'>
        {images.map((image) => <img className="object-contain rounded" src={image.src} alt={image.alt} key={image.src} />)}
      </div>
    </div>
  );
}

export default PartnersSponsor;
