import { useContext } from "react";
import SearchContext from "../SearchContext";

const RentCheckbox = () => {
  const { rent, setRent } = useContext(SearchContext);

  return (
    <div>
      <input
        type="checkbox"
        name="Rent"
        value="Rent"
        onChange={() => setRent(!rent)}
      />
      <label htmlFor="Rent"> Houses For Rent</label>
    </div>
  );
};

export default RentCheckbox;
