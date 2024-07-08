import React from 'react';
import ProductCard from './ProductCard'; // Ensure this matches the file name and extension

import image1 from '../image/1st.png';
import image2 from '../image/2nd.png';
import image3 from '../image/3rd.png';
import image4 from '../image/4th.png';

const products = [
  {
    image: image1,
    discount: '40%',
    name: 'Super Premium Magic Car - Pink',
    price: 1499.00,
    originalPrice: 2499.00,
  },
  {
    image: image2,
    discount: '50%',
    name: 'Vegga RC Car - Red',
    price: 799.00,
    originalPrice: 1599.00,
  },
  {
    image: image3,
    discount: '50%',
    name: 'Varuna Missile Launcher Truck',
    price: 149.00,
    originalPrice: 290.00,
  },
  {
    image: image4,
    discount: '33%',
    name: 'Food Fest',
    price: 399.00,
    originalPrice: 599.00,
  },
  {
    image: image4,
    discount: '33%',
    name: 'Fast Cargo',
    price: 399.00,
    originalPrice: 599.00,
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          discount={product.discount}
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
        />
      ))}
    </div>
  );
};

export default ProductList;





























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
  
//     fetchProducts();
//   }, []);
  

//   useEffect(() => {
//     console.log(products); // Log products array to inspect the structure and image URLs
//   }, [products]);

//   return (
//     <div className="max-w-screen-xl mx-auto p-4">
      
//       <h2 className="text-2xl font-bold mb-4">Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded-lg">
//             <img src={`http://localhost:5000${product.image}`} alt={product.name} className="h-40 w-full object-cover mb-4" />
//             <h3 className="text-lg font-bold">{product.name}</h3>
//             <p className="text-gray-600">${product.price}</p>
//             <p className="text-gray-700 mt-2">{product.description}</p>
//             <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
