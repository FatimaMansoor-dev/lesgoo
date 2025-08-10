import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Generate page numbers dynamically based on totalPages
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-[53.82px] mb-[106px]">
      <div className="flex items-center justify-center space-x-2 text-white p-4">
        {/* Previous button */}
        <button
          className="w-[38px] h-[38px] border border-white rounded flex items-center justify-center hover:bg-white hover:text-black transition"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </button>

        {/* Page numbers */}
        {pageNumbers.map(page => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-[38px] h-[38px] text-[15px] font-semibold leading-[18px] border border-white rounded flex items-center justify-center transition ${
              currentPage === page ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button
          className="w-[38px] h-[38px] border border-white rounded flex items-center justify-center hover:bg-white hover:text-black transition"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
