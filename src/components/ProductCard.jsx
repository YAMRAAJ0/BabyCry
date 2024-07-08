import React from 'react';

const ProductCard = ({ image, discount, name, price, originalPrice }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 relative">
      <div className="absolute top-0 left-0 bg-yellow-400 text-white font-bold px-2 py-1 rounded-br-lg">
        {discount} off
      </div>
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="text-gray-700 mb-2">
        <span className="text-xl font-bold">Rs. {price}</span>{' '}
        <span className="line-through text-red-500">Rs. {originalPrice}</span>
      </div>
      <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
