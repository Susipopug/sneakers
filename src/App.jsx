import { Routes, Route } from 'react-router-dom';
import './index.scss';
import './null.scss';
import Home from './pages/home/Home.jsx';
import Header from './components/Header.jsx';
import FavoritesPage from './pages/Favorites/FavouritesPage.jsx';
import { useContext } from 'react';
import { FavoritesContext } from './context/favoritesContext';

function App() {
  const {
    addToFavorite,
    favoriteCart,
    setFavoriteCart,
    isFavorite,
    setIsFavorite,
  } = useContext(FavoritesContext);

  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/favorites"
            exact
            element={<FavoritesPage items={favoriteCart} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
