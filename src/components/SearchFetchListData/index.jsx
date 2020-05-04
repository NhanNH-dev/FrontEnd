import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

SearchFetchListData.propsType = {
  onSubmit: PropTypes.func,
};
SearchFetchListData.defaultProps = {
  onSubmit: null,
};

function SearchFetchListData(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingValueRef = useRef(null);

  function handleOnchange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typingValueRef.current) {
      clearTimeout(typingValueRef.current);
    }

    typingValueRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: value,
      };
      onSubmit(formValue);
    }, 300);
  }
  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleOnchange} />
    </form>
  );
}
export default SearchFetchListData;
