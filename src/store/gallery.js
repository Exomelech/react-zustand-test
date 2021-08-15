import create from 'zustand';

export const useGallery = create((set, get) => ({
  cards: ['Bob', 'Marley'],
  add: name => {
    const { cards } = get();
    const id = cards.indexOf(name);
    if (id === -1 && name.length > 0) {
      cards.push(name);
      set({ cards });
      return true;
    }
    return false;
  },
  remove: name => {
    const { cards } = get();
    const id = cards.indexOf(name);
    if (id >= 0) {
      cards.splice(id, 1);
      set({ cards });
      return true;
    }
    return false;
  }
}));
