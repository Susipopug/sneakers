import axios from 'axios';
import { createContext, useState } from 'react';

export const FavoritesContext = createContext(); // eslint-disable-line

export const FavoritesProvider = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCart, setFavoriteCart] = useState([]);

  const onFavorite = () => {};

  const addToFavorite = (obj) => {
    axios.post('https://38805c8e11440cc0.mokky.dev/Favorites', obj);
    setFavoriteCart((prevItems) => [...prevItems, obj]);
  };

  const deleteFavoriteItem = (id) => {
    setFavoriteCart((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleFavoriteItem = (obj) => {
    if (favoriteCart.find((item) => item.id === obj.id)) {
      deleteFavoriteItem(obj);
    } else {
      addToFavorite(obj);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteCart,
        setFavoriteCart,
        addToFavorite,
        deleteFavoriteItem,
        handleFavoriteItem,
        isFavorite,
        setIsFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
