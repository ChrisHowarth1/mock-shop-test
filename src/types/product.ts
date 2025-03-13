export interface Product {
  id: string;
  title: string;
  collection: string;
  description: string;
  featuredImage?: {
    id: string;
    url: string;
  };
  variants: {
    edges: Array<{
      node: {
        price: {
          amount: string;
          currencyCode: string;
        };
        selectedOptions: {
          name: string;
          value: string;
        }
      };
    }>;
  };
}