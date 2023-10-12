import {
  StyledReactPaginate,
  PreviousButton,
  NextButton,
} from './Paginator.styled';

export const Paginator = ({ handlePageClick, pageCount }) => {
  return (
    <>
      {!!(pageCount - 1) && (
        <StyledReactPaginate
          breakLabel="..."
          nextLabel={<NextButton />}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel={<PreviousButton />}
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
