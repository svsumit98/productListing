import React from "react";

const Filters = ({
  products,
  categoryFilter,
  setCategoryFilter,
  priceRange,
  setPriceRange
}) => {
  const categories = [...new Set(products.map((p) => p.category))];

  const handleCheckboxChange = (category) => {
    if (categoryFilter.includes(category)) {
      setCategoryFilter(categoryFilter.filter((c) => c !== category));
    } else {
      setCategoryFilter([...categoryFilter, category]);
    }
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
  };

  return (
    <div className="w-full md:w-60 space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Categories</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={categoryFilter.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="mr-2"
            />
            <label>{category}</label>
          </div>
        ))}
      </div>
      <div>
        <h3 className="font-semibold mb-2">Max Price: ${priceRange[1]}</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Filters;
