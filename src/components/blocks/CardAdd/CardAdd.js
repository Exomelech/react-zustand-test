import React, { useState } from 'react';
import { useGallery } from '../../store/gallery';

export const CardAdd = () => {
  const [name, setName] = useState('');
  const add = useGallery(state => state.add);
  return (
    <form onSubmit={() => add(name)}>
      <input value={name} onChange={({ target }) => setName(target.value)} />
    </form>
  );
};
