import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts($sortKey: ProductSortKeys, $reverse: Boolean, $after: String) {
    products(first: 8, after: $after, sortKey: $sortKey, reverse: $reverse) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
          description
          featuredImage {
            id
            url
          }
          variants(first: 3) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

export type SortOption = {
  label: string;
  sortKey: "PRICE" | "TITLE";
  reverse: boolean;
};

export const sortOptions: SortOption[] = [
  { label: "Alphabetical: A-Z", sortKey: "TITLE", reverse: false },
  { label: "Alphabetical: Z-A", sortKey: "TITLE", reverse: true },
  { label: "Price: Low to High", sortKey: "PRICE", reverse: false },
  { label: "Price: High to Low", sortKey: "PRICE", reverse: true },
];
