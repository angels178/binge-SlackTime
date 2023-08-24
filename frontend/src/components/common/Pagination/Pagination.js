import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  function handlePrevClick() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  function handleNextClick() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }

  return (
    <div className="page-buttons">
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        Prev
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
