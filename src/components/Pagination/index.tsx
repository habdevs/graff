import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevClick = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-start mt-4 mb-1">
      <button
        className={`${
          isFirstPage ? 'text-gray-400 cursor-not-allowed' : 'text-gray-800'
        } font-medium py-2 px-4 rounded-l-md text-white`}
        onClick={handlePrevClick}
        disabled={isFirstPage}
      >
        <FaChevronLeft />
      </button>
      <div className="flex items-center justify-center h-10 mx-2">
        <span className="text-white font-medium">{`Page ${currentPage} of ${totalPages}`}</span>
      </div>
      <button
        className={`${
          isLastPage ? 'text-gray-400 cursor-not-allowed' : 'text-gray-800'
        } font-medium py-2 px-4 rounded-r-md text-white`}
        onClick={handleNextClick}
        disabled={isLastPage}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
