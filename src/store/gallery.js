import create from 'zustand';

const someAsyncMethod = async () => {
  return new Promise(res => {
    setTimeout(() => {
      res([10, 20, 30]);
    }, 2000);
  });
};

export const useGallery = create((set, get) => ({
  cards: ['Bob', 'Marley'],
  someData: [],
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
  },
  getCountries: async () => {
    const data = await someAsyncMethod();
    set({
      someData: data
    });
  }
}));
