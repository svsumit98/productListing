import React from "react";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  setCurrentPage
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center mt-4 gap-4">
      <button
        className="px-3 py-1 border rounded-md cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      >
        Prev
      </button>
      <button
        className="px-3 py-1 border rounded-md cursor-pointer"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
