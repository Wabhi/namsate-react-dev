import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";

const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="logo_container">
        <img src={LOGO_URL} alt="brand_logo" width="60" height="60" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          {userLoggedIn ? (
            <li onClick={() => setUserLoggedIn(false)}>Logout</li>
          ) : (
            <li
              onClick={() => {
                setUserLoggedIn(true);
              }}
            >
              Login
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
