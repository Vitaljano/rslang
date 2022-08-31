import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setPage } from '../store/reducers/WordSlice';

const arrowRight = (
  <svg
    width="29"
    height="32"
    viewBox="0 0 29 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.90735e-06 2.00318C0.000858307 2.53404 0.388437 3.04298 1.07753 3.41812L19.8658 13.6591C20.4345 13.969 20.8856 14.3369 21.1934 14.7418C21.5012 15.1468 21.6596 15.5808 21.6596 16.0191C21.6596 16.4574 21.5012 16.8914 21.1934 17.2964C20.8856 17.7013 20.4345 18.0692 19.8658 18.3791L1.10202 28.6067C0.43288 28.9844 0.0626221 29.4901 0.0709915 30.0151C0.079361 30.5401 0.465691 31.0423 1.14677 31.4135C1.82785 31.7848 2.74919 31.9954 3.71235 31.9999C4.6755 32.0045 5.60342 31.8027 6.29623 31.4379L25.06 21.2183C27.583 19.8404 29 17.9732 29 16.0264C29 14.0797 27.583 12.2125 25.06 10.8345L6.27174 0.586907C5.758 0.306701 5.10331 0.115857 4.39052 0.0385237C3.67773 -0.0388096 2.93887 0.000843609 2.26744 0.152466C1.596 0.304088 1.02217 0.560864 0.618551 0.890303C0.214935 1.21974 -0.000328064 1.60704 1.90735e-06 2.00318Z"
      fill="#5EC1C6"
    />
  </svg>
);
const arrowLeft = (
  <svg
    width="29"
    height="32"
    viewBox="0 0 34 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34 2.00318C33.999 2.53404 33.5446 3.04298 32.7367 3.41812L10.709 13.6591C10.0423 13.969 9.51341 14.3369 9.15256 14.7418C8.79172 15.1468 8.606 15.5808 8.606 16.0191C8.606 16.4574 8.79172 16.8914 9.15256 17.2964C9.51341 17.7013 10.0423 18.0692 10.709 18.3791L32.708 28.6067C33.4925 28.9844 33.9266 29.4901 33.9168 30.0151C33.907 30.5401 33.454 31.0423 32.6555 31.4135C31.857 31.7848 30.7768 31.9954 29.6476 31.9999C28.5184 32.0045 27.4305 31.8027 26.6182 31.4379L4.61927 21.2183C1.66129 19.8404 0 17.9732 0 16.0264C0 14.0797 1.66129 12.2125 4.61927 10.8345L26.6469 0.586907C27.2492 0.306701 28.0168 0.115857 28.8525 0.0385237C29.6882 -0.0388096 30.5544 0.000843609 31.3416 0.152466C32.1288 0.304088 32.8016 0.560864 33.2748 0.890303C33.748 1.21974 34.0004 1.60704 34 2.00318Z"
      fill="#5EC1C6"
    />
  </svg>
);

export const Pagination = ({ pageCount }) => {
  const dispatch = useDispatch();
  const handlePageClick = (event) => {
    dispatch(setPage(event.selected));
    localStorage.setItem('bookPage', event.selected);
  };

  return (
    <ReactPaginate
      marginPagesDisplayed={3}
      breakLabel="..."
      nextLabel={arrowRight}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={arrowLeft}
      renderOnZeroPageCount={null}
      containerClassName={
        ' container mx-auto flex my-2 text-white font-medium text-3xl  items-center'
      }
      nextLinkClassName={
        'bg-white rounded-full w-10 h-10 flex justify-center items-center'
      }
      previousLinkClassName={
        'bg-white rounded-full w-10 h-10 flex justify-center items-center'
      }
      breakClassName={'mx-2'}
      pageClassName={'mx-1 '}
      activeClassName={'opacity-40 '}
      disabledLinkClassName={'opacity-40'}
    />
  );
};

export default Pagination;
