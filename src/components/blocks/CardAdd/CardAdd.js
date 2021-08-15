import React, { useState } from 'react';
import { useGallery } from '../../../store/gallery';

export const CardAdd = () => {
  const [name, setName] = useState('');
  const add = useGallery(state => state.add);

  const onSubmit = e => {
    e.preventDefault();
    if (add(name)) setName('');
  };

  return (
    <form onSubmit={onSubmit} style={{ marginBottom: 16 }}>
      <input value={name} onChange={({ target }) => setName(target.value)} />
      <button>Add</button>
    </form>
  );
};
