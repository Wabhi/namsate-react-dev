import { useState } from "react";
import Card from "./Card";
import { API_DATA } from "../../utils/mockData";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState(API_DATA);

  const handleClickForTopRestro = () => {
    const updatedList = listOfRestro.filter(
      (restro) => restro.data.avgRating > 4
    );
    setListOfRestro(updatedList);
  };

  const handleClickForClearFilter = () => {
    setListOfRestro(API_DATA);
  };
  return (
    <div className="body_main_container">
      <div className="search_container">
        <input className="search_input" type="text" placeholder="Search" />
      </div>
      <div className="rating_button_conatiner">
        <button className="top_rated_btn" onClick={handleClickForTopRestro}>
          TOP RATED RESTRORENTS
        </button>
        <button className="top_rated_btn" onClick={handleClickForClearFilter}>
          CLEAR THE FILTER
        </button>
      </div>
      <div className="cards_container">
        {listOfRestro.map((data, index) => {
          return <Card key={index} resData={data} />;
        })}
      </div>
    </div>
  );
};
export default Body;
