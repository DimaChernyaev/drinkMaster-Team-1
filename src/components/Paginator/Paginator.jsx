import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';
import { StyledReactPaginate } from './Paginator.styled';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

export const Paginator = ({ handlePageClick, pageCount }) => {
  return (
    <>
      {!!(pageCount - 1) && (
        <StyledReactPaginate
          breakLabel="..."
          nextLabel={
            <MdOutlineArrowForwardIos fill="var(--fill-paginator)" size={15} />
          }
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel={
            <MdOutlineArrowBackIos fill="var(--fill-paginator)" size={15} />
          }
          renderOnZeroPageCount={null}
          onPageActive={window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })}
        />
      )}
    </>
  );
};

export default Paginator;
