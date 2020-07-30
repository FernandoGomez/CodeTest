import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const SearchBar = ({
  searchFunction,
  variant,
  margin,
  required,
  fullWidth,
  id,
  label,
  name,
  autoFocus,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    searchFunction(searchTerm);
    event.preventDefault();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        value={searchTerm}
        onChange={handleChange}
        variant={variant}
        margin={margin}
        required={required}
        fullWidth={fullWidth}
        id={id}
        label={label}
        name={name}
        autoComplete="email"
        autoFocus={autoFocus}
      />
    </form>
  );
};

export const Component = SearchBar;

export default SearchBar;
