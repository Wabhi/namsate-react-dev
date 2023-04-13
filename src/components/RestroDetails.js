import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../../utils/constant";
const RestroDetails = () => {
  const [restaurant, setRestaurant] = useState(null);
  const parms = useParams();
  const { id } = parms;

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  console.log(restaurant?.cards[0]?.card.card.info);
  async function getRestaurantDetails() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}`
    );
    const res = await data.json();
    setRestaurant(res.data);
  }

  return (
    <div style={{ marginTop: "200px", color: "white" }}>
      <h1>{id}</h1>
      <h1>{restaurant?.cards[0]?.card?.card.info.name}</h1>
      <img
        src={CDN_URL + restaurant?.cards[0]?.card?.card.info.cloudinaryImageId}
        alt={restaurant?.cards[0]?.card?.card.info.name}
      />
    </div>
  );
};

export default RestroDetails;
