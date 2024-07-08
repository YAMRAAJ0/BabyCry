import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from './slider';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);
  

  useEffect(() => {
    console.log(products); // Log products array to inspect the structure and image URLs
  }, [products]);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img src={`http://localhost:5000${product.image}`} alt={product.name} className="h-40 w-full object-cover mb-4" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
