import { Link } from 'react-router-dom';
import Basket from './Basket.jsx';
import { useState } from 'react';

function Header() {
  const [cartOpened, setCartOpened] = useState(false);

  return (
    <>
      {cartOpened && <Basket onClickDrawer={() => setCartOpened(false)} />}

      <header>
        <Link to="/">
          <div className="headerLeft">
            <img width={40} height={40} src="/public/logo.png" alt="" />
            <div className="headerInfo">
              <h3>REACT SNEAKERS</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <ul className="headerRight">
          <li
            onClick={() => setCartOpened(true)}
            className="headerRight__basket"
          >
            <img width={18} height={18} src="/public/basket.svg" alt="" />
            <span>1205р.</span>
          </li>
          <li>
            <Link to="/favorites">
              <img
                width={18}
                height={18}
                src="/public/favorite-notclicked.svg"
                alt=""
              />
            </Link>
          </li>
          <li>
            <img width={18} height={18} src="/public/user.svg" alt="" />
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
