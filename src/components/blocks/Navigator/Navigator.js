import React from 'react';
import { Link } from 'react-router-dom';
import './styles';

export const Navigator = () => (
  <nav className="navigator">
    <div className="navigator__link">
      <Link to="/">Home</Link>
    </div>
    <div className="navigator__link">
      <Link to="/gallery">Gallery</Link>
    </div>
  </nav>
);
