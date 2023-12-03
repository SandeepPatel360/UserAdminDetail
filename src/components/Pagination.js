import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  handlePagination,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPaginationButtons = () => {
    const pageButtons = [];

    pageButtons.push(
      <button
        key="first"
        onClick={() => handlePagination(1)}
        className={`px-2 py-1 mx-1 focus:outline-none ${
          currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
    );

    pageButtons.push(
      <button
        key="previous"
        onClick={() => handlePagination(currentPage - 1)}
        className={`px-2 py-1 mx-1 focus:outline-none ${
          currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-200"
        }`}
        disabled={currentPage === 1}
      >
        <i className="fas fa-angle-left"></i>
      </button>
    );

    for (let page = 1; page <= totalPages; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => handlePagination(page)}
          className={`px-2 py-1 mx-1 focus:outline-none ${
            currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {page}
        </button>
      );
    }

    pageButtons.push(
      <button
        key="next"
        onClick={() => handlePagination(currentPage + 1)}
        className={`px-2 py-1 mx-1 focus:outline-none ${
          currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-gray-200"
        }`}
        disabled={currentPage === totalPages}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    );

    pageButtons.push(
      <button
        key="last"
        onClick={() => handlePagination(totalPages)}
        className={`px-2 py-1 mx-1 focus:outline-none ${
          currentPage === totalPages ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
    );

    return pageButtons;
  };

  return <div className="flex justify-center mt-4">{renderPaginationButtons()}</div>;
};

export default Pagination;
