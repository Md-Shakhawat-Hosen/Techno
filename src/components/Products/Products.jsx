import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData();
    // console.log(products.products)
    return (
      <div className='max-w-screen-xl mx-auto px-2 my-5'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;