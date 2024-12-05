import React from 'react'

const products = [
  { id: 1, name: "Product 1", price: 29.99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: 39.99, image: "https://via.placeholder.com/150" },
  // Add more products
];

const Product = () => {
  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  )
}

export default Product
