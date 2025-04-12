import React, { useState, useEffect } from "react";
import Filters from "./components/Filters";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";
import { mockProducts } from "./utils/mockData";
import Product from "./components/Product";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const PRODUCTS_PER_PAGE = 8;

  // Simulate fetching products from /products API
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  // Apply filters and search
  useEffect(() => {
    let result = [...products];

    if (categoryFilter.length > 0) {
      result = result.filter((p) => categoryFilter.includes(p.category));
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [products, categoryFilter, priceRange, searchTerm]);

  const indexOfLast = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirst = indexOfLast - PRODUCTS_PER_PAGE;
  const currentItems = filteredProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Product Listing
          </h1>
          <p className="text-sm text-gray-500">
            Browse and filter our products
          </p>
        </header>

        <Search setSearchTerm={setSearchTerm} />

        <div className="flex flex-col md:flex-row gap-6">
          <Filters
            products={products}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />

          <main className="flex-1">
            {loading ? (
              <Loader />
            ) : currentItems.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-6">
                <Product products={currentItems} />
                <Pagination
                  currentPage={currentPage}
                  totalItems={filteredProducts.length}
                  itemsPerPage={PRODUCTS_PER_PAGE}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
