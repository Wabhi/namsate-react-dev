import { APP_STORE, PLAY_STORE } from "../../utils/constant";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_one">
        <div className="footer_title">
          Comapany
          <ul className="section_one">
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>FoodCall Blog </li>
            <li> Bug Bounty</li>
            <li> FoodCall One</li>
            <li> FoodCall Corporate </li>
            <li> FoodCall Instamart</li>
            <li> FoodCall Genie</li>
          </ul>
        </div>
        <div className="footer_title">
          Contact
          <ul className="section_one">
            <li>Help & Support</li>
            <li> Partner with us</li>
            <li> Ride with us</li>
          </ul>
        </div>
        <div className="footer_title">
          Legal
          <ul className="section_one">
            <li>Terms & Conditions</li>
            <li> Refund & Cancellation</li>
            <li> Privacy Policy</li>
            <li>Cookie Policy </li>
            <li>Offer Terms</li>
            <li>Phishing & Fraud </li>
            <li>Corporate – FoodCall Money Codes Terms and Conditions</li>
            <li>Corporate - FoodCall Discount Voucher Terms and Conditions</li>
          </ul>
        </div>
        <div className="app_available">
          <div>
            <img alt="app_store" src={APP_STORE} />
          </div>
          <div>
            <img alt="gplay_store" src={PLAY_STORE} />
          </div>
        </div>
      </div>
      <div className="footer_two ">
        <div className="sub_footer_contrainer">
          <div>FoodCall</div>
          <div>@ copyright FoodCall</div>
          <div>Social Media</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
