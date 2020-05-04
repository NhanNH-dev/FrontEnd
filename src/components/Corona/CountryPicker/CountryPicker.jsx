import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Country.module.css";
import { fetchCountries } from "../api";
const CountryPicker = ({ handleCountryChange }) => {
  const [country, setCountries] = useState([""]);
  useEffect(() => {
    const fecthAPI = async () => {
      setCountries(await fetchCountries());
    };
    fecthAPI();
  }, [setCountries]);

  return (
    <FormControl className={styles.container}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {country.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
