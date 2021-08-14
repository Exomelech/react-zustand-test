import React from 'react';
import { useGallery } from '../../../store/gallery';
import { CardItem } from '../../common/CardItem';

export const Cards = () => {
  const { cards } = useGallery(state => state);
  return cards.map((el, i) => <CardItem key={'carditem' + i} name={el} />);
};
