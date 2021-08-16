import React from 'react';
import { useGallery } from '../store/gallery';

export const Home = ({}) => {
  const someData = useGallery(state => state.someData);

  return (
    <div>
      Home
      {someData.map(el => (
        <div key={el}>{el}</div>
      ))}
    </div>
  );
};
