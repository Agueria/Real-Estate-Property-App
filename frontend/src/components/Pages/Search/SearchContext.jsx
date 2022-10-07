import { createContext } from "react";

const SearchContext = createContext({
  buy: false,
  setBuy: () => {},
  rent: false,
  setRent: () => {},
  priceFilter: { minPrice: 0, maxPrice: 0 },
  setPriceFilter: () => {},
});
export default SearchContext;
