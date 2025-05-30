import { useContext, useEffect, useState } from 'react';
import { CartsContext } from '../context/cartsContext';
import { FavoritesContext } from '../context/favoritesContext';
import { useSearchParams } from 'react-router-dom';
import Card from './Card';
import axios from 'axios';

export default function CartsList() {
  const [items, setItems] = useState([]);
  const { cartItems, setCartItems } = useContext(CartsContext);
  const { handleCartItems } = useContext(CartsContext);
  const [searchParams] = useSearchParams('');
  const { setFavoriteCart, addToFavorite, handleFavoriteItem } =
    useContext(FavoritesContext);

  const search = searchParams.get('search') || '';

  useEffect(() => {
    axios.get('https://38805c8e11440cc0.mokky.dev/Products').then((res) => {
      setItems(res.data);
    });

    axios.get('https://38805c8e11440cc0.mokky.dev/Cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get('https://38805c8e11440cc0.mokky.dev/Favorites').then((res) => {
      setFavoriteCart(res.data);
    });
  }, []);

  return (
    <div className="sneakers">
      {items
        // .filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase()))
        .map((obj) => (
          <Card
            key={obj.id}
            cardData={obj}
            onPlus={(obj) => handleCartItems(obj)}
            clickFavorite={(obj) => handleFavoriteItem(obj)}
          />
        ))}
    </div>
  );
}
