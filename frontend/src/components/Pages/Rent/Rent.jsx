import Navbar from "../../navbar/Navbar";
import styles from "./Rent.module.scss";
import Card from "../../card/Card";
import { useQuery } from "@apollo/client";
import { RENT_CARDS } from "../../../utils/Queries";

const Rent = () => {
  const { loading, data, error } = useQuery(RENT_CARDS);

  return (
    <main>
      <Navbar />
      <div className={styles.content}>
        <h1>Houses For Renting</h1>
        <div className={styles.card}>
          {loading || error ? (
            <h1 style={{ color: "#333" }}>Loading ...</h1>
          ) : (
            <div className={styles.cards}>
              {data.houses.data.map((house, index) => (
                <Card
                  key={index}
                  secondClass={styles.card}
                  info={{
                    id: house.id,
                    category: "Rent",
                    imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                    city: `${house.attributes.location.data.attributes.City}`,
                    neighbourhood: `${house.attributes.Neighbourhood}`,
                    street: `${house.attributes.Street}`,
                    rooms: `${house.attributes.Rooms}`,
                    bedrooms: `${house.attributes.Bedrooms}`,
                    bathrooms: `${house.attributes.Bathrooms}`,
                    shortAndress: `${house.attributes.Short_Andress}`,
                    rent: `${house.attributes.Rent}`,
                  }}
                  showInfo={{
                    price: false,
                    rent: true,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Rent;
