import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopupModal = () => {
    setIsOpen(true);
  };

  const handleClosePopupModal = () => {
    setIsOpen(false);
  };

  const handleUserLoggedIn = () => {
    setUserLoggedIn(true);
    setIsOpen(false);
  };

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
            <Link>
              <li onClick={handleOpenPopupModal}>Login</li>
            </Link>
          )}
        </ul>
      </div>
      {isOpen ? (
        <div id="mySidenav" className="sidenav">
          <a class="closebtn" onClick={handleClosePopupModal}>
            &times;
          </a>
          <div class="login_form">
            <div className="logo_container">
              <img src={LOGO_URL} alt="brand_logo" width="60" height="60" />
            </div>
            <div>
              <button onClick={handleUserLoggedIn} className="submit_btn">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
