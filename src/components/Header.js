import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="logo_container">
        <img src={LOGO_URL} alt="brand_logo" width="60" height="60" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
          <Link to="cart">
            <li>Cart</li>
          </Link>
          {userLoggedIn ? (
            <Link onClick={() => setUserLoggedIn(false)}>
              <li>Logout</li>
            </Link>
          ) : (
            <Link
              onClick={() => {
                setUserLoggedIn(true);
              }}
            >
              <li>Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
