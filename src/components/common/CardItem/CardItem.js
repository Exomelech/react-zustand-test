import React from 'react';
import { useGallery } from '../../../store/gallery';

export const CardItem = ({ name }) => {
  const remove = useGallery(state => state.remove);
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => remove(name)}>Remove</button>
    </div>
  );
};
