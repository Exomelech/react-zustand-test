import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainNavigator } from './navigation/MainNavigator';
import { Navigator } from './components/blocks/Navigator';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <div className={'content'}>
        <MainNavigator />
      </div>
    </BrowserRouter>
  );
}
