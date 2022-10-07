import Card from "../../card/Card";
import styles from "./FilteredCards.module.scss";
import { useContext } from "react";
import SearchContext from "./SearchContext";

const checkHouseCategory = (house) => {
  const houseData = house.attributes.categories.data;
  if (houseData.length === 2) return "Buy / Rent";
  else {
    if (houseData[0].attributes.Category === "Rent") return "Rent";
    else return "Buy";
  }
};

const FilteredCards = ({ houses }) => {
  const { buy, rent } = useContext(SearchContext);

  const showPrice = (house) => {
    if (buy) if (house.attributes.Price > 0) return true;
  };

  const showRent = (house) => {
    if (rent) if (house.attributes.Rent > 0) return true;
  };

  return (
    <div className={styles.cards}>
      {houses.map((house, index) => (
        <Card
          key={index}
          secondClass={styles.card}
          info={{
            id: house.id,
            imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
            category: checkHouseCategory(house),
            city: `${house.attributes.location.data.attributes.City}`,
            neighbourhood: `${house.attributes.Neighbourhood}`,
            street: `${house.attributes.Street}`,
            rooms: `${house.attributes.Rooms}`,
            bedrooms: `${house.attributes.Bedrooms}`,
            bathrooms: `${house.attributes.Bathrooms}`,
            shortAndress: `${house.attributes.Short_Andress}`,
            price: house.attributes.Price,
            rent: house.attributes.Rent,
          }}
          showInfo={{
            price: showPrice(house),
            rent: showRent(house),
          }}
        />
      ))}
    </div>
  );
};

export default FilteredCards;
