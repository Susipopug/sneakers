import { useContext, useState } from 'react';
import { CartsContext } from '../context/cartsContext.jsx';
import { FavoritesContext } from '../context/favoritesContext';

function Card({ cardData, onPlus, clickFavorite }) {
  const { id, title, price, imgUrl } = cardData;
  const { cartItems } = useContext(CartsContext);

  const {
    addToFavorite,
    favoriteCart,
    setFavoriteCart,
    isFavorite,
    setIsFavorite,
  } = useContext(FavoritesContext);

  function isAdded() {
    const findItem = cartItems.findIndex((item) => item.id === id);
    return findItem !== -1;
  }

  const onClickFavorite = () => {
    clickFavorite(cardData);
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="card">
      <div className="favorite">
        <img
          onClick={() => onClickFavorite(cardData)}
          src={
            isFavorite
              ? '/public/favorite-clicked.svg'
              : '/public/favorite-notclicked.svg'
          }
          alt=""
        />
      </div>
      <img width={133} height={112} src={imgUrl} alt="" />
      <p>{title}</p>
      <div className="cardBottom">
        <div className="cardBottom-price">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className="cardButton"
          onClick={() => onPlus(cardData)}
          width={11}
          height={11}
          src={isAdded() ? '/public/checked.svg' : '/public/plus.svg'}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
