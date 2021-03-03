import React from "react";

const Filters = (props) => {
  const handleChange = (event) => {
    props.handleFilter({ value: event.target.value });
  };

  return (
    <>
      <form className="form">
        <input type="text" onChange={handleChange} />
      </form>
    </>
  );
};
export default Filters;

/* Filters.defaultProps = {
  inputType: "text", //inputType es nombre provisional por ahora
};
 */
