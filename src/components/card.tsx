import { CardProps } from '../types/card';

export const Card = ({ product }: CardProps) => {
  return (
    <li className="h-full border-1 border-gray-200 hover:border-black">
      <div className='group flex flex-col gap-2 cursor-pointer h-full'>
        <img 
          src={product.featuredImage?.url} 
          alt={product.title} 
          className="w-full object-cover" 
        />
        <div className='flex flex-col gap-2 text-left p-6 relative flex-grow'>
          <h3 className='text-sm font-bold'>{product.title}</h3>
          <p className='text-base'>{product.description}</p>
          <div className='text-sm'>
            {Number(product.variants.edges[0].node.price.amount).toLocaleString('en-GB', {
              style: 'currency',
              currency: product.variants.edges[0].node.price.currencyCode
            })}
          </div>
          <button 
            className='absolute right-6 bottom-6 text-sm font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          > 
            View 
          </button>
        </div>
      </div>
    </li>
  );
};

