import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
// import StyledReactPaginate from './Paginator.styled';

export const Paginator = ({ handlePageClick, pageCount }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      onPageActive={window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })}
      // //   pageClassName='flex items-center justify-center border border-solid border-blue-50 hover:bg-red-400 hover:text-white w-10 h-10 rounded-md'
      // activeClassName=""
      containerClassName="pagination"
      activeLinkClassName="active"
      pageLinkClassName="page-num"
      previousLinkClassName="page-num"
      nextLinkClassName="page-num"
      // breakClassName=""
      // disabledClassName="opacity-50 cursor-not-allowed"
    />
    // containerClassName="flex justify-center gap-4 my-10 mb-6 text-sm"
    // //   pageClassName='flex items-center justify-center border border-solid border-blue-50 hover:bg-red-400 hover:text-white w-10 h-10 rounded-md'
    // activeClassName="selected bg-[var(--active-pagination-btn)] rounded-full"
    // pageLinkClassName="flex items-center justify-center p-2 w-8 h-8 rounded-full text-center border-solid border-2 border-white rounded-full outline-none text-[var(--color-text)] bg-transparent cursor-pointer shadow-md hover:scale-105 transition-scale duration-200 ease-in-out"
    // activeLinkClassName="border-solid border-2 border-white rounded-full bg-[var(--active-pagination-btn)]  text-accent hover:scale-105 transition-scale duration-200 ease-in-out"
    // previousClassName="flex items-center justify-center p-2 w-8 h-8 rounded-full text-[var(--color-text)] text-center border-solid border-2 border-white rounded-full outline-none shadow-md bg-transparent cursor-pointer"
    // nextClassName="flex items-center justify-center p-2 w-8 h-8 rounded-full text-[var(--color-text)] text-center border-solid border-2 border-white rounded-full outline-none  bg-transparent cursor-pointer shadow-md"
    // breakClassName="flex items-center justify-center p-2 w-8 h-8 rounded-full text-center border-solid border-2 border-white rounded-full outline-none  text-[var(--color-text)] bg-transparent cursor-pointer"
    // disabledClassName="opacity-50 cursor-not-allowed"
    // />
  );
};

// import React from 'react';
// // import ReactPaginate from 'react-paginate';

// import { Pages, Page } from './Paginator.styled';

// const Paginator = ({ perPage, totalPage, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPage / perPage); i += 1)
//     pageNumbers.push(i);
//   return (
//     <Pages>
//       <ul>
//         {pageNumbers.map((number) => (
//           <li key={number}>
//             <Page
//               onClick={() => paginate(number)}
//               href="!#"
//               className="page-link"
//             >
//               {number}
//             </Page>
//           </li>
//         ))}
//       </ul>
//       {/* <ReactPaginate
//         initialPage={currentPage}
//         breakLabel="..."
//         nextLabel=">"
//         onPageChange={(event) => console.log(event)}
//         pageRangeDisplayed={4}
//         pageCount={totalPages}
//         previousLabel="<"
//         renderOnZeroPageCount={null}
//       /> */}
//     </Pages>
//   );
// };

export default Paginator;
