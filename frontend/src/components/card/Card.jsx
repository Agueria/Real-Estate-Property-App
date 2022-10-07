import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import building3 from "../../assets/building3.jpg";
import styles from "./Card.module.scss";

import { Link } from "react-router-dom";

const Card = ({ info, showInfo, secondClass }) => {
  const convertPrice = (price) => {
    if (price >= 1000 && price < 999999) return `${price / 1000}k `;
    if (price >= 1000000) return `${price / 1000000}m `;
    return price;
  };

  function convertRent(rent) {
    if (rent >= 1000) return `${rent / 1000}k`;
    return rent;
  }

  return (
    <div className={`${styles.card_container} ${secondClass}`}>
      <div className={styles.image_container}>
        <div className={styles.image_buy_btn}>
          <Link to="/">{`${info.category}`}</Link>
        </div>
        <img src={info.imageSource} alt="building" />
      </div>
      <h3>{info.city}</h3>
      <h4>
        <p className={styles.neighbourhood}>{`${info.neighbourhood},`}</p>
        <p className={styles.street}>{` ${info.street}`}</p>
      </h4>
      <div className={styles.info}>
        <div className={styles.row_1}>
          <div className={styles.rooms}>
            <BsFillDoorOpenFill />
            <span>{`${info.rooms} Rooms`}</span>
          </div>

          <div className={styles.bedrooms}>
            <IoIosBed />
            <span>{`${info.bedrooms} Bedrooms`}</span>
          </div>
        </div>

        <div className={styles.row_2}>
          <div className={styles.bathrooms}>
            <FaBath />
            <span>{`${info.bathrooms} Bathrooms`}</span>
          </div>

          <div className={styles.shortAndress}>
            <IoLocationSharp />
            <span>{`${info.shortAndress}`}</span>
          </div>
        </div>
      </div>

      <div className={styles.card_buy}>
        <div className={styles.prices}>
          <h2
            style={showInfo.price ? {} : { display: "none" }}
          >{`${convertPrice(info.price)}$`}</h2>
          <h2 style={showInfo.rent ? {} : { display: "none" }}>{`${convertRent(
            info.rent
          )} $ / m`}</h2>
        </div>
        <div className={styles.card_btn}>
          <Link to={`/property/${info.id}`}>See More</Link>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  info: {
    id: undefined,
    imageSource: building3,
    category: "Buy",
    city: "City",
    neighbourhood: "Neighbourhood",
    street: "Street",
    rooms: 9,
    bedrooms: 7,
    bathrooms: 2,
    shortAndress: "DA",
    price: 80000,
    rent: 0,
  },
  showInfo: {
    price: true,
    rent: false,
  },
  secondClass: "undefined",
};

export default Card;
