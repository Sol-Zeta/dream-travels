import React from "react";
import Image from "next/image";
import { Trip } from '@/types/index';

const Card: React.FC<Trip> = ({ title, description, photo_url, status }) => {
  return (
    <div>
      <Image 
        src={photo_url} 
        alt={title}
        width={300}     
        height={300}     
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
