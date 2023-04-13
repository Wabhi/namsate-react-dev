import { CDN_URL } from "../../utils/constant";

const Card = (props) => {
  const { resData } = props;
  return (
    <div className="card">
      <img
        className="card_image"
        alt="card_image"
        src={CDN_URL + `${resData.data.cloudinaryImageId}`}
      />
      <h3 className="restro_name">{resData.data.name}</h3>
      <h4 className="restro_cusion">{resData.data.cuisines.join(",")}</h4>
      <div className="product_additional_details">
        <div className="product_rating">&#9733; {resData.data.avgRating}</div>
        <div>{resData.data.deliveryTime}min</div>
        <div>₹{resData.data.costForTwo / 100} FOR TWO</div>
      </div>
    </div>
  );
};

export default Card;
