import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl p-4 shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.category}</p>
          <p className="text-md font-bold mt-2">₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
