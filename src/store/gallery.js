import create from 'zustand';

export const useGallery = create(set => ({
  cards: ['Bob', 'Marley'],
  add: name =>
    set(state => ({
      cards: [...state.cards, name]
    })),
  remove: name =>
    set(state => {
      console.log(name);
      const id = state.cards.indexOf(name);
      if (id >= 0) state.cards.splice(id, 1);
      return state;
    })
}));
