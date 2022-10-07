import styles from "./PriceRange.module.scss";
import { useState, useEffect, useContext, useMemo, useCallback } from "react";
import SearchContext from "../SearchContext";
import debounce from "lodash.debounce";

const PriceRange = () => {
  const MAX_PRICE = "100000000";
  const MIN_PRICE = "0";

  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [inputMinPrice, setInputMinPrice] = useState("");
  const [inputMaxPrice, setInputMaxPrice] = useState("");
  const { setPriceFilter, buy } = useContext(SearchContext);

  //CONTEXT
  useEffect(() => {
    setPriceFilter({ minPrice, maxPrice });
    //console.log("minprice:", minPrice, " maxprice:", maxPrice);
    //eslint-disable-next-line
  }, [minPrice, maxPrice]);

  //OPTIONS
  const minPriceHandler = (e) => {
    if (e.target.value === MIN_PRICE) {
      setInputMinPrice("");
      setMinPrice(MIN_PRICE);
    } else {
      setInputMinPrice(e.target.value);
      setMinPrice(e.target.value);
    }
  };

  const maxPriceHandler = (e) => {
    if (e.target.value === MAX_PRICE) {
      setInputMaxPrice("");
      setMaxPrice(MAX_PRICE);
    } else {
      setInputMaxPrice(e.target.value);
      setMaxPrice(e.target.value);
    }
  };

  //INPUTS
  const minInputHandler = (e) => {
    setInputMinPrice(e.target.value);

    if (e.target.value === "") MIN_debouncedHandler(MIN_PRICE);
    else MIN_debouncedHandler(e.target.value);
  };

  const maxInputHandler = (e) => {
    setInputMaxPrice(e.target.value);
    if (e.target.value === "") MAX_debouncedHandler(MAX_PRICE);
    else MAX_debouncedHandler(e.target.value);
  };

  //DEBOUNCE
  const MIN_debouncedHandler = useCallback(
    debounce((val) => setMinPrice(val), 1000),
    []
  );
  const MAX_debouncedHandler = useCallback(
    debounce((val) => setMaxPrice(val), 1000),
    []
  );

  useEffect(() => {
    return MIN_debouncedHandler.cancel(), MAX_debouncedHandler.cancel;
  }, []);

  return (
    <div className={styles.container} style={buy ? {} : { display: "none" }}>
      <div className={styles.minPrice}>
        <input
          type="number"
          placeholder="From"
          onChange={minInputHandler}
          value={inputMinPrice}
        />
        <select name="minPrice" onChange={minPriceHandler}>
          <option value={MIN_PRICE}>ANY</option>
          <option value="100000">100k</option>
          <option value="200000">200k</option>
          <option value="500000">500k</option>
        </select>
      </div>
      <div className={styles.maxPrice}>
        <input
          type="number"
          placeholder="To"
          value={inputMaxPrice}
          onChange={maxInputHandler}
        />
        <select name="maxPrice" onChange={maxPriceHandler}>
          <option value={MAX_PRICE}>ANY</option>
          <option value="100000">100k</option>
          <option value="200000">200k</option>
          <option value="500000">500k</option>
        </select>
      </div>
    </div>
  );
};

export default PriceRange;
