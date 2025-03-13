import { useQuery } from "@apollo/client"
import { useState } from 'react';
import { GET_PRODUCTS, SortOption, sortOptions } from '../api/products';
import { Card } from './card';
import { Product } from '../types/product';

export const ProductGrid = () => {
    const [selectedSort, setSelectedSort] = useState<SortOption>(sortOptions[0]);
    const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS, {
      variables: {
        sortKey: selectedSort.sortKey,
        reverse: selectedSort.reverse
      }
    });

    const loadMore = () => {
      fetchMore({
        variables: {
          after: data.products.pageInfo.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            products: {
              ...fetchMoreResult.products,
              edges: [
                ...prev.products.edges,
                ...fetchMoreResult.products.edges,
              ],
            },
          };
        },
      });
    };

    if (loading && !data) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
          <div className="flex pb-4 mx-1 md:mx-6">
            <p className="p-[15px]"> Sort by: </p>
            <select
              value={sortOptions.findIndex(option => 
                  option.sortKey === selectedSort.sortKey && 
                  option.reverse === selectedSort.reverse
              )}
              onChange={(e) => setSelectedSort(sortOptions[Number(e.target.value)])}
              className="cursor-pointer"
              >
              {sortOptions.map((option, index) => (
                  <option key={index} value={index}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-gray-200 divide-x divide-y'>
              {data.products.edges.map(({ node }: { node: Product }) => (
                  <Card key={node.id} product={node} />
              ))}
          </ul>
          {data.products.pageInfo.hasNextPage && (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMore}
                className="mt-4 px-6 py-3 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-100 font-extrabold"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'LOAD MORE'}
              </button>
            </div>
          )}
        </div>
    );
}; 

