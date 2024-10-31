import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import FavoritesPage from './Pages/FavoritesPage/FavoritesPage';
import Acerca from './Pages/AcercaPage/Acerca';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Acerca" element={<Acerca />} />
          <Route path="/Details/:id" element={<DetailsPage />} />
          <Route path="/Favorites" element={<FavoritesPage />} /> {/* Ruta para FavoritesPage */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;