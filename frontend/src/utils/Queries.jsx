import { gql } from "@apollo/client";

const BUY_CARDS = gql`
  query GET_BUY_CARDS {
    houses(filters: { categories: { Category: { contains: "Buy" } } }) {
      data {
        id
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighbourhood
          Street
          Rooms
          Bedrooms
          Bathrooms
          Short_Andress
          Price
        }
      }
    }
  }
`;

const RENT_CARDS = gql`
  query GET_RENT_CARDS {
    houses(filters: { categories: { Category: { contains: "Rent" } } }) {
      data {
        id
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighbourhood
          Street
          Rooms
          Bedrooms
          Bathrooms
          Short_Andress
          Rent
        }
      }
    }
  }
`;

const ID_CARD = gql`
  query GET_ID_CARD($id: ID) {
    houses(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighbourhood
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          location {
            data {
              attributes {
                City
              }
            }
          }
          Rooms
          Bedrooms
          Bathrooms
          Price
          Street
          Price
          Rent
          Description
          Short_Andress
        }
      }
    }
  }
`;

const FILTERED_CARDS = gql`
  query GET_FILTERED_CARDS(
    $cat: String
    $maxPrice: Float
    $minPrice: Float
    $forRent: Float
    $page: Int
  ) {
    houses(
      filters: {
        categories: { Category: { contains: $cat } }
        or: [{ Price: { eq: $forRent } }, { Price: { gte: $minPrice } }]
        and: { Price: { lt: $maxPrice } }
      }
      pagination: { pageSize: 3, page: $page }
    ) {
      data {
        id
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighbourhood
          Street
          Rooms
          Bedrooms
          Bathrooms
          Short_Andress
          Price
          Rent
        }
      }
    }
  }
`;

export { BUY_CARDS, RENT_CARDS, ID_CARD, FILTERED_CARDS };
