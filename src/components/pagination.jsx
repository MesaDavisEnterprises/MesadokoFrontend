import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"Anterior"}
      nextLabel={"Siguiente"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      activeClassName={"text-white font-bold"}
      onPageChange={handlePageChange}
      containerClassName={"flex justify-center items-center mt-4 mb-4 space-x-2"}
      subContainerClassName={"flex justify-center items-center mt-4 mb-4 space-x-2"}
      pageLinkClassName={
        "page-link bg-white text-blue-500 p-3 hover:bg-blue-100 border rounded-full mx-1"
      }
      previousLinkClassName={
        "page-link bg-white text-blue-500 p-3 hover:bg-blue-100 border rounded-full mx-1"
      }
      nextLinkClassName={
        "page-link bg-white text-blue-500 p-3 hover:bg-blue-100 border rounded-full mx-1"
      }
    />
  );
};

export default Pagination;
