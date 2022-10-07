import { useLazyQuery } from "@apollo/client";
import { FILTERED_CARDS } from "../../../utils/Queries";
import { useContext, useEffect, useState } from "react";
import SearchContext from "./SearchContext";
import FilteredCards from "./FilteredCards";
import { ActionButton } from "../../buttons/Buttons";

const QueryCards = () => {
  const { buy, rent, priceFilter } = useContext(SearchContext);
  const [houses, setHouses] = useState([]);
  const [page, setPage] = useState(2);

  //QUERY
  const [getCards, { loading, data, error, fetchMore }] = useLazyQuery(
    FILTERED_CARDS,
    {
      variables: {
        cat: "",
        $minPrice: 0,
        $maxPrice: 0,
        $page: page,
      },
      nextFetchPolicy: "cache-first",
      fetchPolicy: "cache-first",
    }
  );

  useEffect(() => {
    if (data) {
      if (!loading) {
        setHouses(data.houses.data);
      }
      if (error) {
        setHouses([]);
      }
    }
    //eslint-disable-next-line
  }, [loading, data, error]);

  useEffect(() => {
    if (buy && rent) {
      getCards({
        variables: {
          cat: "",
          minPrice: parseFloat(priceFilter.minPrice),
          maxPrice: parseFloat(priceFilter.maxPrice),
          forRent: 0,
        },
      });
    } else if (rent) {
      getCards({
        variables: {
          cat: "rent",
        },
      });
    } else if (buy) {
      getCards({
        variables: {
          cat: "buy",
          minPrice: parseFloat(priceFilter.minPrice),
          maxPrice: parseFloat(priceFilter.maxPrice),
        },
      });
    } else
      getCards({
        variables: {
          cat: "none",
        },
      });
    setPage(2);
    setButtonLabel("Fetch More");
    //eslint-disable-next-line
  }, [buy, rent, priceFilter]);

  //BUTTON
  const [fetching, setFetching] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Fetch More");

  useEffect(() => {
    if (fetching) setButtonLabel("Loading...");
  }, [fetching]);

  const clickHandler = async () => {
    setFetching(true);
    const results = await fetchMore({
      variables: { page: page },
    })
      .then((res) => {
        setPage(page + 1);
        setFetching(false);
        setButtonLabel("Fetch More");
        return res.data.houses;
      })
      .catch((e) => {
        setFetching(false);
        return "error";
      });

    if (results.data.length)
      setHouses((houses) => [...houses, ...results.data]);
    else setButtonLabel("End Of List");
  };

  return (
    <>
      <FilteredCards houses={houses} />
      <div
        style={
          buttonLabel === "End Of List"
            ? { pointerEvents: "none", userSelect: "none" }
            : {}
        }
      >
        <ActionButton clickFunc={clickHandler}>{buttonLabel}</ActionButton>
      </div>
    </>
  );
};

export default QueryCards;
