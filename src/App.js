import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainNavigator } from './navigation/MainNavigator';
import { Navigator } from './components/blocks/Navigator';
import './style.css';
import { useGallery } from './store/gallery';

export default function App() {
  const getCountries = useGallery(state => state.getCountries);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <BrowserRouter>
      <Navigator />
      <div className={'content'}>
        <MainNavigator />
      </div>
    </BrowserRouter>
  );
}
