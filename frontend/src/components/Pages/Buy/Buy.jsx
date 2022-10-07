import styles from "./Buy.module.scss";
import Card from "../../card/Card";
import { useQuery } from "@apollo/client";
import { BUY_CARDS } from "../../../utils/Queries";
import Navbar from "../../navbar/Navbar";

const Buy = () => {
  const { loading, data, error } = useQuery(BUY_CARDS);

  return (
    <main>
      <Navbar />
      <div className={styles.content}>
        <h1>Houses For Sale</h1>
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
                    category: "Buy",
                    imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                    city: `${house.attributes.location.data.attributes.City}`,
                    neighbourhood: `${house.attributes.Neighbourhood}`,
                    street: `${house.attributes.Street}`,
                    rooms: `${house.attributes.Rooms}`,
                    bedrooms: `${house.attributes.Bedrooms}`,
                    bathrooms: `${house.attributes.Bathrooms}`,
                    shortAndress: `${house.attributes.Short_Andress}`,
                    price: `${house.attributes.Price}`,
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

export default Buy;
