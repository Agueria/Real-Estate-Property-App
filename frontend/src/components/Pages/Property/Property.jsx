import Navbar from "../../navbar/Navbar";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ID_CARD } from "../../../utils/Queries";
import Card from "../../card/Card";
import styles from "./Property.module.scss";

const Property = () => {
  let params = useParams();
  const { loading, data, error } = useQuery(ID_CARD, {
    variables: { id: params.propertyId },
  });

  const queryHandler = () => {
    if (loading) return <h1>LOADING</h1>;
    if (error) return <h1>ERROR</h1>;
    if (data) {
      if (data.houses.data.length) {
        let house = data.houses.data[0];
        return (
          <div className={styles.house}>
            <Card
              info={{
                id: params.properyId,
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
                rent: `${house.attributes.Rent}`,
              }}
              showInfo={{
                price: house.attributes.Price ? 1 : 0,
                rent: house.attributes.Rent ? 1 : 0,
              }}
            />
            <div
              style={{ marginTop: "2rem", marginBottom: "2rem", color: "#333" }}
            >
              <span>Description:</span>
              <p>{house.attributes.Description}</p>
            </div>
          </div>
        );
      }
      return <h1>Property not Found</h1>;
    }
  };

  return (
    <main className={styles.flex}>
      <Navbar />
      <div className={styles.center}>{queryHandler()}</div>
    </main>
  );
};

export default Property;
