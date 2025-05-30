import { useContext } from 'react';
import { CartsContext } from '../context/cartsContext';

function Basket({ onClickDrawer }) {
  const { cartItems, deleteCartItem } = useContext(CartsContext);

  const total = cartItems.reduce((sum, obj) => sum + obj.price, 0);
  const tax = (total * 0.05).toFixed();

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawerHeader">
          <h3>Корзина</h3>
          <img
            onClick={onClickDrawer}
            width={30}
            height={30}
            src="/public/btn-remove.svg"
            alt=""
          />
        </div>

        {cartItems.map((obj) => (
          <div key={obj.id} className="cartItem">
            <img
              className="cartItemImg"
              width={70}
              height={70}
              src={obj.imgUrl}
              alt=""
            />
            <div>
              <p>{obj.title}</p>
              <b>{obj.price}</b>
            </div>
            <button
              onClick={() => deleteCartItem(obj.id)}
            >
              <img
                className="cartItemBtn"
                src="/public/btn-remove.svg"
                alt=""
              />
            </button>
          </div>
        ))}

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{total} р.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>{tax} р.</b>
            </li>
          </ul>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
