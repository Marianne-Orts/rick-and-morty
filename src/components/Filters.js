import React from "react";
import "./Filters.scss";

const Filters = (props) => {
  const handleChange = (event) => {
    props.handleFilter({ value: event.target.value });
  };

  return (
    <>
      <form className="Filters__form">
        <input className="Filters__input" type="text" onChange={handleChange} />
      </form>
    </>
  );
};
export default Filters;

Filters.defaultProps = {
  type: "text",
};
