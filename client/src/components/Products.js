import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({products}) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
          Shopping Everyday
        </h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quos fugit inventore, cumque quae corporis ratione tenetur eos
          voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
          asperiores repudiandae assumenda quidem.
        </p>
      </div>
      {/* ==== Products Start Here */}
      <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10'>
        {products.map((item) => (
            <ProductsCard key={item._id} products={item} />
        ))}
      </div>
      {/* ====== Products End Here*/}
    </div>
  )
}

export default Products;