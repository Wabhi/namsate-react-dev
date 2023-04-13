import { useState, useEffect } from "react";
import Card from "./Card";
import { API_DATA } from "../../utils/mockData";

const handleSearchRestro = (searchText, listOfRestro) => {
  let updateListOfRestro = listOfRestro.filter((restro) => {
    restro.data?.name?.toLowerCase().includes(searchText.toLowerCase());
  });
  return updateListOfRestro;
};

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestroListFromAPi();
  }, []);

  async function getRestroListFromAPi() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setListOfRestro(res.data?.cards[2]?.data?.data.cards);
  }

  const handleClickForTopRestro = () => {
    const updatedList = listOfRestro.filter(
      (restro) => restro.data.avgRating > 4
    );
    setListOfRestro(updatedList);
  };

  const handleClickForClearFilter = () => {
    setListOfRestro(API_DATA);
  };

  // if (listOfRestro.length === 0) {
  //   return (
  //     <div className="no_restro_found">
  //       <h4>There is no restaurant which you are looking for🥺 </h4>
  //     </div>
  //   );
  // }
  return (
    <div className="body_main_container">
      <div className="search_container">
        <input
          className="search_input"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search_btn"
          onClick={() => {
            const data = handleSearchRestro(searchText, listOfRestro);
            console.log(data);
            setListOfRestro(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="rating_button_conatiner">
        <button className="top_rated_btn" onClick={handleClickForTopRestro}>
          TOP RATED RESTRORENTS
        </button>
        <button className="top_rated_btn" onClick={handleClickForClearFilter}>
          CLEAR THE FILTER
        </button>
      </div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="cards_container">
          {listOfRestro.map((data, index) => {
            return <Card key={index} resData={data} />;
          })}
        </div>
      )}
    </div>
  );
};
export default Body;
