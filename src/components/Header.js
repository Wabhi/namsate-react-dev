import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleClickForBacktoHome = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="logo_container" onClick={handleClickForBacktoHome}>
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
      <div className="sideMenu" style={{ right: isOpen ? "0" : "-500px" }}>
        <a class="closebtn" onClick={handleClosePopupModal}>
          &times;
        </a>
        <div
          style={{ paddingLeft: "40px", paddingRight: "120px", width: "522px" }}
        >
          <div class="_3pYe-" style={{ height: "130px" }}>
            <span class="_22fFW icon-back"></span>
            <div class="_1Tg1D">Enter OTP</div>
            <div class="HXZeD">We've sent an OTP to your phone number.</div>
            <img
              class="_2tuBw _12_oN jdo4W"
              width="100"
              height="105"
              alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            />
          </div>
          <div>
            <form>
              <div>
                <div class="_3Um38 _3lG1r">
                  <input
                    class="_381fS"
                    disabled=""
                    type="tel"
                    name="mobile"
                    id="mobile"
                    tabindex="1"
                    maxlength="10"
                    autocomplete="off"
                    value="6296156182"
                  />
                  <div class="_2EeI1 _26LFr"></div>
                  <label class="_1Cvlf _2tL9P " for="mobile">
                    Phone number
                  </label>
                </div>
                <div class="_3Um38 _3lG1r">
                  <input
                    class="_381fS"
                    type="text"
                    name="otp"
                    id="otp"
                    tabindex="2"
                    maxlength="6"
                    autocomplete="off"
                    value={""}
                  />
                  <div class="_2EeI1"></div>
                  <label class="_1Cvlf " for="otp">
                    One time password
                  </label>
                </div>
              </div>
              <div>
                <div class="B9kkl">
                  <div class="_1ASpm">Didn't receive OTP</div>
                  <div class="_1FXXi">Verify via call</div>
                </div>
                <div class="_25qBi _2-hTu">
                  <a class="a-ayg">
                    <input type="submit" style={{ display: "none" }} />
                    VERIFY OTP
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
