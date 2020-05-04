import React, { useState } from "react";
import PropTypes from "prop-types";

function FormSubmit(props) {
  const [value, setValue] = useState("");
  const { onSubmit } = props;
  function handleChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      name: value,
    };
    onSubmit(formValues);
    setValue("");
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input value={value} onChange={handleChange} />
    </form>
  );
}

FormSubmit.propTypes = {
  onSubmit: PropTypes.func,
};
FormSubmit.defaultProps = {
  onSubmit: null,
};
export default FormSubmit;
