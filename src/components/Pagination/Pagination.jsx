import React from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { onPageChange, pagination } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);
  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>

      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  pagination: PropTypes.object.isRequired,
};
Pagination.defaultProps = {
  onPageChange: null,
};
export default Pagination;
