import styles from "./Search.module.scss";
import Navbar from "../../navbar/Navbar";
import { useState } from "react";

import SearchContext from "./SearchContext";
import Filters from "./Filters/Filters";
import QueryCards from "./QueryCards";

const Search = () => {
  //STATES
  const [buy, setBuy] = useState(true);
  const [rent, setRent] = useState(false);
  const [priceFilter, setPriceFilter] = useState({
    minPrice: 0,
    maxPrice: 0,
  });

  //CONTEXT
  const value = {
    buy,
    setBuy,
    rent,
    setRent,
    priceFilter,
    setPriceFilter,
  };

  return (
    <main>
      <Navbar />
      <h1 className={styles.title}>Search</h1>
      <SearchContext.Provider value={value}>
        <Filters />
        <QueryCards />
      </SearchContext.Provider>
    </main>
  );
};

export default Search;
